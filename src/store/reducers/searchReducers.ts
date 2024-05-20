import { returnInitialQuery } from '../../api/api'
import { Character, SearchActinos, Suggestion } from '../../types/queryTypes'
import { SET_CHARACTERS, SET_SEARCH_PARAMS, SET_SUGGESTIONS } from '../actions/actionsTypes'
import { SET_PAGE } from '../actions/actionsTypes'

export type SearchState = {
	queryParams: ReturnType<typeof returnInitialQuery>
	characters: Array<Character>,
	suggestions: Array<Suggestion>
}

const initalState: SearchState = {
	queryParams: returnInitialQuery(window.location.search),
	characters: [],
	suggestions: [],
}

export const searchReducer = (state = initalState, action: SearchActinos) => {
	switch (action.type) {
		case SET_SEARCH_PARAMS:
			return { ...state, queryParams: { ...state.queryParams, ...action.payload } }
		case SET_CHARACTERS:
			return { ...state, characters: action.payload }
		case SET_SUGGESTIONS:
			return { ...state, suggestions: action.payload }
		default:
			return state
	}
}

