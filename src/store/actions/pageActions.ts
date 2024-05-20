import { SET_PAGE } from './actionsTypes'


export const setPage = (page: number) => ({
	type: SET_PAGE,
	payload: page,
})