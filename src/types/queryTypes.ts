import { SET_CHARACTERS, SET_SEARCH_PARAMS, SET_SUGGESTIONS } from "../store/actions/actionsTypes"

export type Info = {
  count: number,
    pages: number,
    next:null | string,
    prev: null | string
}

export type Results = Array<Character>

export type SearchByParamsResponse = {
  info: Info,
  results: Results
}

export enum AvailableQueryKeys  {
  name = "name",
  page = "page",
  status = "status",
  gender = "gender",
  species = "species"
}

export type QueryParams = Record<AvailableQueryKeys, string>

export type Character = {
  id: number,
  name: string,
  status: string,
  species: string,
  gender: string,
  origin: {
    name: string,
  },
  image: string,
  url: string,
  created: string
}

export type SetSearchParams = {
  type: typeof SET_SEARCH_PARAMS
  payload: Partial<QueryParams>
}

export type SetCharacters = {
  type: typeof SET_CHARACTERS
  payload: Array<Character>
}

export type SetSuggestions = {
  type: typeof SET_SUGGESTIONS
  payload: Array<string>
}

export type SearchActinos = SetSearchParams | SetCharacters | SetSuggestions