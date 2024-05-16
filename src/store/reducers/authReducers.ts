import { AuthActionTypes, AuthState } from '../../types/authTypes'
import { snackbarActionsType } from '../../types/snackbarTypes'
import { CHECK_AUTH, LOGIN, LOGOUT, REGISTER } from '../actions/actionsTypes'

const initialState: AuthState = {
	isAuth: false,
	user: null,
}

export const authReducer = (
	state = initialState,
	action: AuthActionTypes | snackbarActionsType
): AuthState => {
	switch (action.type) {
		case REGISTER:
			console.log('я зареган???')
			return state
		case LOGIN:
			return { ...state, isAuth: true }
		case LOGOUT:
			return { ...state, isAuth: false, user: null }
		case CHECK_AUTH:
			const userData = localStorage.getItem('users')
			if (userData) {
				return { ...state, isAuth: true, user: JSON.parse(userData).username }
			}
			return state

		default:
			return state
	}
}
