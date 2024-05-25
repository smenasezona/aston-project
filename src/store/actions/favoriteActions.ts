import { Dispatch } from 'redux'
import { UpdatePostList } from '../../types/favoriteTypes'
import { getFavoriteFromLocalStorage } from '../../utils/getFavoriteFromLocalStorage'
import { ADD_TO_LIST, DELETE_FROM_LIST, FILLING_ID_LIST, UPDATE_POST_LIST } from './actionsTypes'

export const addToListAction = (id: number) => {
	return (dispatch: Dispatch, getState: () => { [key: string]: any }) => {
		dispatch({ type: ADD_TO_LIST, payload: id })

		const obj = getFavoriteFromLocalStorage()

		obj[getState().auth.user] = getState().favorite.idList
		localStorage.setItem('favorite', JSON.stringify(obj))
	}
}

export const deleteFromListAction = (id: number) => {
	return (dispatch: Dispatch, getState: () => { [key: string]: any }) => {
		dispatch({ type: DELETE_FROM_LIST, payload: id })

		const obj = getFavoriteFromLocalStorage()

		obj[getState().auth.user] = getState().favorite.idList
		localStorage.setItem('favorite', JSON.stringify(obj))
	}
}

export const updatePostList = (arr: Array<{}>): UpdatePostList => ({
	type: UPDATE_POST_LIST,
	payload: arr,
})

export const fillingIdList = () => {
	return (dispatch: Dispatch, getState: any) => {
		dispatch({ type: FILLING_ID_LIST, payload: getState().auth.user })
	}
}
