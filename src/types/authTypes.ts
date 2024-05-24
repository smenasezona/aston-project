import { CHECK_AUTH, LOGIN, LOGOUT, REGISTER } from '../store/actions/actionsTypes'

export type RegisterAction = {
	type: typeof REGISTER
	payload: { username: string; email: string; password: string }
}

export type LoginAction = {
	type: typeof LOGIN
	payload: { username: string; password: string }
}

export type LogoutAction = {
	type: typeof LOGOUT
}

export type CheckAuth = {
	type: typeof CHECK_AUTH
}

export interface AuthState {
	isAuth: boolean
	user: string | null
	snackbar?: {
		snackbarOpen: boolean
		snackbarMessage: string
	} | null
}

export type AuthActionTypes = RegisterAction | LoginAction | LogoutAction | CheckAuth
