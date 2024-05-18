import { returnInitialQuery } from '../../api/api';
import { Character, SearchActinos } from '../../types/queryTypes'
import { SET_CHARACTERS, SET_SEARCH_PARAMS, SET_SUGGESTIONS } from '../actions/actionsTypes'

export type SearchState = {
	queryParams: ReturnType<typeof returnInitialQuery>
	characters: Array<Character>,
	suggestions: Array<string>
}

const initalState: SearchState = {
	queryParams: returnInitialQuery(window.location.search),
	characters: [],
	suggestions: [],
}

export const searchReducer = (state = initalState, action: SearchActinos) => {
	switch (action.type) {
		case SET_SEARCH_PARAMS:
			return { ...state, queryParams:{...state.queryParams,...action.payload} }
		case SET_CHARACTERS:
			return { ...state, characters: action.payload }
		case SET_SUGGESTIONS:
			return { ...state, suggestions: action.payload }
		// case SET_NAME:
		// 	return 
		// case SET_STATUS:
		// 	return 
		// case SET_GENDER:
		// 	return 
		// case SET_SPECIES:
		// 	return 
		
			default:
			return state
	}
}

