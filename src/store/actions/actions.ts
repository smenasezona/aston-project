import {
	CheckAuth,
	LoginAction,
	LogoutAction,
	RegisterAction,
} from '../../types/authTypes'

import { CHECK_AUTH, LOGIN, LOGOUT, REGISTER } from './actionsTypes'

export const register = (
	username: string,
	password: string
): RegisterAction => ({
	type: REGISTER,
	payload: { username, password },
})

export const login = (username: string): LoginAction => ({
	type: LOGIN,
	payload: username,
})

export const logout = (): LogoutAction => ({
	type: LOGOUT,
})

export const checkAuth = (): CheckAuth => ({
	type: CHECK_AUTH,
})
