import { Dispatch } from 'redux'
import { CheckAuth, LogoutAction, RegisterAction } from '../../types/authTypes'
import {
	CHECK_AUTH,
	LOGIN,
	LOGOUT,
	REGISTER,
	SHOW_SNACKBAR,
} from './actionsTypes'

export const registerUser = (
	username: string,
	email: string,
	password: string
): RegisterAction => ({
	type: REGISTER,
	payload: { username, email, password },
})

export const loginUser =
	(username: string, password: string) => (dispatch: Dispatch) => {
		const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')
		const user = storedUsers.find(
			(usr: { username: string; password: string }) =>
				usr.username === username && usr.password === password
		)

		if (user) {
			dispatch({ type: LOGIN, payload: { username, password } })
		} else {
			dispatch({
				type: SHOW_SNACKBAR,
				payload: '🤨 Неправильный логин или пароль!',
			})
		}
	}

export const logout = (): LogoutAction => ({
	type: LOGOUT,
})

export const checkAuth = (): CheckAuth => ({
	type: CHECK_AUTH,
})
