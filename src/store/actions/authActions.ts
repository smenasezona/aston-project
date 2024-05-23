import {Dispatch} from 'redux'
import {CheckAuth} from '../../types/authTypes'
import {findInLocalStorage} from '../../utils/findInLocalStorage'
import {
    CHECK_AUTH,
    LOGIN,
    LOGOUT,
    REGISTER,
    SHOW_SNACKBAR,
} from './actionsTypes'
import {ThunkResult} from "../store";
import { useLanguage } from '../../i18n/LanguageContext';
import { Translation } from '../../i18n/translation';


export const registerUser =
    (username: string, email: string, password: string, t:(key: keyof Translation) => string | number): ThunkResult<void> =>

        (dispatch: Dispatch) => {
            const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')
            const sameUsername = findInLocalStorage(storedUsers, 'username', username)
            const sameEmail = findInLocalStorage(storedUsers, 'email', email)

            if (sameUsername && sameEmail ) {
                dispatch({
                    type: SHOW_SNACKBAR,
                    payload: t('userandemailexists'),
                })
                return
            }
            if (sameUsername) {
                dispatch({
                    type: SHOW_SNACKBAR,
                    payload: t('usernameexists'),
                })
                return
            }
            if (sameEmail) {
                dispatch({
                    type: SHOW_SNACKBAR,
                    payload: t('emailexists'),
                })
                return
            }
            storedUsers.push({username, email, password})

            localStorage.setItem('users', JSON.stringify(storedUsers))
            localStorage.setItem(
                'currentSession',
                JSON.stringify({username, password})
            )

            dispatch({type: REGISTER, payload: {username, email, password}})
            // dispatch({ type: HIDE_MODAL })
            dispatch({
                type: SHOW_SNACKBAR,
                payload: t('welcome'),
            })
        }

export const loginUser =
    (username: string, password: string): ThunkResult<void> => (dispatch: Dispatch) => {
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')
        const user = storedUsers.find(
            (usr: { username: string; password: string }) =>
                usr.username === username && usr.password === password
        )

        if (user) {
            localStorage.setItem(
                'currentSession',
                JSON.stringify({username, password})
            )
            dispatch({type: LOGIN, payload: {username, password}})
            // dispatch({ type: HIDE_MODAL })
        } else {
            dispatch({
                type: SHOW_SNACKBAR,
                payload: '🤨 Неправильный логин или пароль!',
            })
        }
    }

export const logout = (): ThunkResult<void> => (dispatch: Dispatch) => {
    localStorage.removeItem('currentSession')
    dispatch({type: LOGOUT})
}

export const checkAuth = (): CheckAuth => ({
    type: CHECK_AUTH,
})
