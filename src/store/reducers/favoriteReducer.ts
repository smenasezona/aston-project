import { FavoriteActinos, FavoriteState } from "../../types/favoriteTypes"
import { ADD_TO_LIST, DELETE_FROM_LIST, FILLING_ID_LIST, UPDATE_POST_LIST } from "../actions/actionsTypes"
import { getFavoriteFromLocalStorage } from "../../utils/getFavoriteFromLocalStorage"

const initialState: FavoriteState = {
	idList: [],
    postList: [],
}

export const favoriteReducer = (state = initialState, action:FavoriteActinos) => {
    switch(action.type){
        case ADD_TO_LIST:
            return {...state,idList: [...state.idList,action.payload]}

        case DELETE_FROM_LIST:
            let tempArr = state.idList
            tempArr = tempArr.filter(item => item !== action.payload)
            return {...state, idList: tempArr}  
        
        case UPDATE_POST_LIST:
            if (Array.isArray(action.payload)) return {...state,postList:action.payload}
            return {...state,postList:[action.payload]}

        case FILLING_ID_LIST:
            const favorite = getFavoriteFromLocalStorage()
            const storageList = favorite[action.payload] || []
            return {...state, idList: storageList}
            
        default:
            return state
    }
}