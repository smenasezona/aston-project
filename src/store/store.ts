import { AnyAction, combineReducers } from '@reduxjs/toolkit'
import { applyMiddleware, createStore } from 'redux'
import { ThunkDispatch, thunk } from 'redux-thunk'
import { authReducer } from './reducers/authReducers'
import { snackbarReducer } from './reducers/snackbarReducers'

const rootReducer = combineReducers({
	auth: authReducer,
	snackbar: snackbarReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
