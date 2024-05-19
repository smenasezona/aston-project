import { QueryParams, SearchByParamsResponse } from "../types/queryTypes"

const GRAPHQL_URL = 'https://rickandmortyapi.com/graphql'

enum GraphqlQueryParams {
  name = "String",
  page = "Int",
  status = "String",
  gender = "String",
  species = "String"
}

export function filterParams(stateParams:Record<keyof QueryParams, null | string>):Partial<QueryParams>{
  return Object.entries(stateParams)
  .filter(([ _ , value ])=> value !==null)
  .reduce<Record<string,string>>((acc,[key,value])=>{
    acc[key] = value as string
    return acc
  },{})
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
        name,id
      }
    }
  }`

export async function fetchSuggestions(variables: Partial<QueryParams>) {
  try {
    const res = await fetch(
      GRAPHQL_URL,
      {
        method: 'POST',
        body: JSON.stringify({ query: buildSuggestionQuery(variables), variables: { ...variables, page: +(variables.page ?? 1) } }),
        headers: { 'content-type': 'application/json' }
      }
    )
      .then(x => x.json()) as {data:{characters:SearchByParamsResponse<{name:string,id:string}[]>}}
      return res

  } catch {}
    return {data:{characters:{
      info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null
      },
      results: []
    }}}
}