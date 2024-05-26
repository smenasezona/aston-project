import { Dispatch } from 'redux'
import { UpdatePostList } from '../../types/favoriteTypes'
import { getFavoriteFromLocalStorage } from '../../utils/getFavoriteFromLocalStorage'
import { ADD_TO_LIST, DELETE_FROM_LIST, FILLING_ID_LIST, UPDATE_POST_LIST } from './actionsTypes'
import { Character } from '../../types/queryTypes'
import { RootState, ThunkResult } from '../store'

export const addToListAction = (id: number): ThunkResult<void> => {
	return (dispatch: Dispatch, getState: () => RootState) => {
		dispatch({ type: ADD_TO_LIST, payload: id })

		const obj = getFavoriteFromLocalStorage()
		const user = getState().auth.user;

		if (user !== null){
			obj[user] = getState().favorite.idList
		}

		localStorage.setItem('favorite', JSON.stringify(obj))
	}
}

export const deleteFromListAction = (id: number): ThunkResult<void> => {
	return (dispatch: Dispatch, getState: () => RootState) => {
		dispatch({ type: DELETE_FROM_LIST, payload: id })

		const obj = getFavoriteFromLocalStorage()
		const user = getState().auth.user;

		if (user !== null){
			obj[user] = getState().favorite.idList
		}
		
		localStorage.setItem('favorite', JSON.stringify(obj))
	}
}

export const updatePostList = (arr: Character[] | Character): UpdatePostList => ({
	type: UPDATE_POST_LIST,
	payload: arr,
})

export const fillingIdList = (): ThunkResult<void> => {
	return (dispatch: Dispatch, getState: () => RootState) => {
		dispatch({ type: FILLING_ID_LIST, payload: getState().auth.user })
	}
}
