import { AuthActionTypes, AuthState } from '../../types/authTypes'
import { CHECK_AUTH, LOGIN, LOGOUT, REGISTER } from '../actions/actionsTypes'

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
			const users = JSON.parse(localStorage.getItem('users') || '[]')
			users.push(action.payload)
			localStorage.setItem('users', JSON.stringify(users))
			console.log('я зареган???')
			return state
		case LOGIN:
			const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')
			const user = storedUsers.find(
				(usr: { username: string; password: string }) =>
					usr.username === action.payload.username &&
					usr.password === action.payload.password
			)
			if (user) {
				console.log('Я вошел??')
				return { ...state, isAuth: true, user }
			}
			return state
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
