import {
	CHECK_AUTH,
	LOGIN,
	LOGOUT,
	REGISTER,
} from '../store/actions/actionsTypes'

type RegisterAction = {
	type: typeof REGISTER
	payload: { username: string; password: string }
}

export type LoginAction = {
	type: typeof LOGIN
	payload: string
}

export type LogoutAction = {
	type: typeof LOGOUT
}

export type CheckAuth = {
	type: typeof CHECK_AUTH
}

export type AuthState = {
	isAuth: boolean
	user: string | null
}

export type AuthActionTypes =
	| RegisterAction
	| LoginAction
	| LogoutAction
	| CheckAuth
