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
			return { ...state, isAuth: true, user: action.payload.username }
		case LOGIN:
			return { ...state, isAuth: true, user: action.payload.username }
		case LOGOUT:
			return { ...state, isAuth: false, user: null }
		case CHECK_AUTH:
			const userData = localStorage.getItem('users')
			const currSession = localStorage.getItem('currentSession');

			if (userData && currSession) {
				const sameUsernames = JSON.parse(userData).some((item:any) => item.username === JSON.parse(currSession).username);

				if(sameUsernames) return { ...state, isAuth: true, user: JSON.parse(currSession).username}

				return state;
			}
			return state

		default:
			return state
	}
}
