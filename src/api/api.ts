import { QueryParams } from "../types/queryTypes"

const REST_URL = 'https://rickandmortyapi.com/api'

export async function fetchCharacters(query:Partial<QueryParams>) {
  const path = new URLSearchParams(query)
  
  console.log(''+path)
  const res = await fetch(`${REST_URL}/character?${path}`).then(x=>x.json())
  return res
}

export async function fetchCharactersById(...idList:Array<number>) {

  console.log(''+idList)
  const res = await fetch(`${REST_URL}/character/${idList}`).then(x=>x.json())
  return res
}

