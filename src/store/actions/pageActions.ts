import { SET_PAGE } from './actionsTypes'
import { pageState } from '../reducers/pageReducer'

export const setPage = (page: number) => ({
	type: SET_PAGE,
	payload: page,
})