import { SET_PAGE } from '../actions/actionsTypes'

export type pageState = {
	page: number,
}

export const initialState: pageState = {
	page: 1,
}

export const pageReducer = (state = initialState, action: any): pageState => {
	switch (action.type) {
		case SET_PAGE:
			return { ...state, page: action.payload }
		default:
			return state
	}
}