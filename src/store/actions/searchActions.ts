import { Dispatch } from 'redux'
import { fetchCharacters } from '../../api/api'
import { fetchSuggestions } from '../../api/characterSuggestion'
import {
	Character,
	QueryParams,
	SearchByParamsResponse,
	SetCharacters,
	SetSearchParams,
	SetSuggestions,
	Suggestion,
} from '../../types/queryTypes'
import { SET_CHARACTERS, SET_PAGES, SET_SEARCH_PARAMS, SET_SUGGESTIONS } from './actionsTypes'

export const setSearchParamsAction = (query: Partial<QueryParams>): SetSearchParams => ({
	type: SET_SEARCH_PARAMS,
	payload: query,
})

export const setCharactersAction = (charactersList: Character[]): SetCharacters => ({
	type: SET_CHARACTERS,
	payload: charactersList,
})

export const setSuggestionsAction = (suggestionsList: Suggestion[]): SetSuggestions => ({
	type: SET_SUGGESTIONS,
	payload: suggestionsList,
})

export const setPagesAction = (page: number) => ({
	type: SET_PAGES,
	payload: page,
})

export const setCharacters = (queryParams: Partial<QueryParams>) => {
	return async (dispatch: Dispatch) => {
		const res: SearchByParamsResponse<Character[]> = await fetchCharacters(queryParams)
		dispatch(setPagesAction(res.info.pages))
		dispatch(setCharactersAction(res.results))
	}
}

export const setSuggestions = (queryParams: Partial<QueryParams>) => {
	return async (dispatch: Dispatch) => {
		const res = await fetchSuggestions(queryParams)
		dispatch(setSuggestionsAction(res.data.characters.results))
	}
}
