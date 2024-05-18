import { QueryParams } from "../types/queryTypes"

const GRAPHQL_URL = 'https://rickandmortyapi.com/graphql'

enum GraphqlQueryParams {
  name = "String",
  page = "Int",
  status = "String",
  gender = "String",
  species = "String"
}

function constructVariables(query: Partial<QueryParams>) {
  const variables: Record<string, string> = {$page:"Int"}
  Object.keys(query)
    .forEach((key) => { variables[`$${key}`] = GraphqlQueryParams[key as keyof QueryParams] })
  return Object.entries(variables).map(([key, value]) => `${key}: ${value}`)
}

const returnFilterParams = (query: Partial<QueryParams>) => {
  return Object.keys(query).filter(key => key !== 'page')
    .map(key => `${key}: $${key}`)
}

const buildSuggestionQuery = (query: Partial<QueryParams>) => `query getSuggestions(
    ${constructVariables(query)}
  ){
    characters(
      page: $page,
      ${Object.keys(query).filter(key => key !== 'page').length ?
    `filter: {${returnFilterParams(query)}}`
    :
    ''
  }
    ) {
      info {
        count,next,prev,pages
      }
      results {
        name
      }
    }
  }`

export async function fetchSuggestions(variables: Partial<QueryParams>) {
  const res = await fetch(
    GRAPHQL_URL,
    {
      method: 'POST',
      body: JSON.stringify({ query: buildSuggestionQuery(variables), variables: { ...variables, page: +(variables.page ?? 1) } }),
      headers: { 'content-type': 'application/json' }
    }
  )
    .then(x => x.json())
  return res
}