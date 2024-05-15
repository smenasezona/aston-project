import { AuthActionTypes, AuthState } from '../types/authTypes'
import { CHECK_AUTH, LOGIN, LOGOUT, REGISTER } from './actions/actionsTypes'

const initialState: AuthState = {
	isAuth: false,
	user: null,
}

export const authReducer = (
	state = initialState,
	action: AuthActionTypes
): AuthState => {
	switch (action.type) {
		case REGISTER:
			localStorage.setItem('user', JSON.stringify(action.payload))
			return state
		case LOGIN:
			return { ...state, isAuth: true, user: action.payload }
		case LOGOUT:
			return { ...state, isAuth: false, user: null }
		case CHECK_AUTH:
			const userData = localStorage.getItem('user')
			if (userData) {
				return { ...state, isAuth: true, user: JSON.parse(userData).username }
			}
			return state
		default:
			return state
	}
}
