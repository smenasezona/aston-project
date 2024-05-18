import { Dispatch } from "redux";
import { Character, QueryParams, SearchByParamsResponse, SetCharacters, SetSearchParams, SetSuggestions } from "../../types/queryTypes";
import { SET_CHARACTERS, SET_SEARCH_PARAMS, SET_SUGGESTIONS } from "./actionsTypes";
import { fetchCharacters } from "../../api/api";

export const setSearchParamsAction = (query:Partial<QueryParams>): SetSearchParams => ({
	type: SET_SEARCH_PARAMS,
	payload: query,
})

export const setCharactersAction = (charactersList:Character[]): SetCharacters => ({
	type: SET_CHARACTERS,
	payload: charactersList,
})

export const setSuggestionsAction = (suggestionsList:string[]): SetSuggestions => ({
	type: SET_SUGGESTIONS,
	payload: suggestionsList,
})

export const setCharacters = (queryParams: Partial<QueryParams>) => {
    return async (dispatch:Dispatch) => {
        const res: SearchByParamsResponse = await fetchCharacters(queryParams)
        dispatch(setCharactersAction(res.results))
    }
}