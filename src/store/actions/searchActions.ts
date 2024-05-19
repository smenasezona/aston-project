import { Dispatch } from "redux";
import { Character, QueryParams, SearchByParamsResponse, SetCharacters, SetSearchParams, SetSuggestions, Suggestion } from "../../types/queryTypes";
import { SET_CHARACTERS, SET_SEARCH_PARAMS, SET_SUGGESTIONS } from "./actionsTypes";
import { fetchCharacters } from "../../api/api";
import { fetchSuggestions } from "../../api/characterSuggestion";

export const setSearchParamsAction = (query:Partial<QueryParams>): SetSearchParams => ({
	type: SET_SEARCH_PARAMS,
	payload: query,
})

export const setCharactersAction = (charactersList:Character[]): SetCharacters => ({
	type: SET_CHARACTERS,
	payload: charactersList,
})

export const setSuggestionsAction = (suggestionsList:Suggestion[]): SetSuggestions => ({
	type: SET_SUGGESTIONS,
	payload: suggestionsList,
})

export const setCharacters = (queryParams: Partial<QueryParams>) => {
    return async (dispatch:Dispatch) => {
        const res: SearchByParamsResponse<Character[]> = await fetchCharacters(queryParams)
        dispatch(setCharactersAction(res.results))
    }
}

export const setSuggestions = (queryParams: Partial<QueryParams>) => {
    return async (dispatch:Dispatch) => {
        const res = await fetchSuggestions(queryParams)
        dispatch(setSuggestionsAction(res.data.characters.results))
    }
}