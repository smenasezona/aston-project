import { AnyAction, combineReducers } from '@reduxjs/toolkit'
import { applyMiddleware, createStore } from 'redux'
import { ThunkDispatch, thunk } from 'redux-thunk'
import { authReducer } from './reducers/authReducers'
import { modalReducer } from './reducers/modalReducer'
import { snackbarReducer } from './reducers/snackbarReducers'
import { searchReducer } from './reducers/searchReducers'
import { ThunkAction } from '@reduxjs/toolkit'
import { favoriteReducer } from './reducers/favoriteReducer'
import { historyReducer } from './reducers/historyReducer'

const rootReducer = combineReducers({
	auth: authReducer,
	snackbar: snackbarReducer,
	modal: modalReducer,
	search: searchReducer,
	favorite: favoriteReducer,
	history: historyReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>
export type ThunkResult<R> = ThunkAction<R, RootState, void, AnyAction>

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
