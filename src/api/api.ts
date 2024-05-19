import { QueryParams } from "../types/queryTypes"

const REST_URL = 'https://rickandmortyapi.com/api'

export async function fetchCharacters(query: Partial<QueryParams>) {
  const path = new URLSearchParams(query)
  try {
    const res = await fetch(`${REST_URL}/character?${path}`).then(x => x.json())
    return res

  } catch {
    return {
      info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null
      },
      results: []
    }
  }
  
}

export async function fetchCharactersById(...idList: Array<number>) {

  const res = await fetch(`${REST_URL}/character/${idList}`).then(x => x.json())
  return res
}

export function returnInitialQuery(search: string) {
  const searchParams = new URLSearchParams(search)
  return {
    name: searchParams.get('name'),
    page: searchParams.get('page') || "1",
    status: searchParams.get('status'),
    gender: searchParams.get('gender'),
    species: searchParams.get('species'),
  }
}