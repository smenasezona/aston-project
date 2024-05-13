// src/store/reducer.ts
import * as types from './actions/actionsTypes';

interface AppState {
    films: {} | null;
    error: string | null;
}

const initialState: AppState = {
    films: null,
    error: null
};

const reducer = (state = initialState, action: any): AppState => {
    switch (action.type) {
        case types.FAVORITE_MOVIES:
            return { ...state, films: action.payload, error: null };
        case types.FETCH_FAILURE:
            return { ...state, films: null, error: action.payload };
        default:
            return state;
    }
};

export default reducer;
