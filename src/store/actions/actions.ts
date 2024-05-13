import * as types from './actionsTypes';

export const getUser = () => async (dispatch: any) => {
    try {
        const response = await fetch('https://api.example.com/user');
        dispatch({type: types.FAVORITE_MOVIES, payload: response});
    } catch (error) {
        dispatch({type: types.FETCH_FAILURE, payload: error});
    }
};

export const FAVORITE_MOVIES = 'FAVORITE_MOVIES';
export const FETCH_FAILURE = 'FETCH_FAILURE';