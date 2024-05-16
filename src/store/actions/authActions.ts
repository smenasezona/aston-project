import {
	CheckAuth,
	LoginAction,
	LogoutAction,
	RegisterAction,
} from '../../types/authTypes'
import { CHECK_AUTH, LOGIN, LOGOUT, REGISTER } from './actionsTypes'

export const registerUser = (
	username: string,
	email: string,
	password: string
): RegisterAction => ({
	type: REGISTER,
	payload: { username, email, password },
})

export const loginUser = (username: string, password: string): LoginAction => ({
	type: LOGIN,
	payload: { username, password },
})

export const logout = (): LogoutAction => ({
	type: LOGOUT,
})

export const checkAuth = (): CheckAuth => ({
	type: CHECK_AUTH,
})
