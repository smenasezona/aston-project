import { ADD_TO_LIST, DELETE_FROM_LIST, FILLING_ID_LIST, UPDATE_POST_LIST } from '../store/actions/actionsTypes'
import { Character } from './queryTypes'

export type FavoriteState = {
	idList: number[]
	postList: Character[]
}

export type SetAddTypes = {
	type: typeof ADD_TO_LIST
	payload: number
}

export type SetDeleteTypes = {
	type: typeof DELETE_FROM_LIST
	payload: number
}

export type UpdatePostList = {
	type: typeof UPDATE_POST_LIST
	payload: Character[] | Character
}

export type FillingIdList = {
	payload: string
	type: typeof FILLING_ID_LIST
}

export type FavoriteActinos = SetAddTypes | SetDeleteTypes | UpdatePostList | FillingIdList
