import { combineReducers } from '@reduxjs/toolkit'
import { applyMiddleware, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { authReducer } from './reducers/authReducers'
import { snackbarReducer } from './reducers/snackbarReducers'

const rootReducer = combineReducers({
	authReducer,
	snackbarReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
