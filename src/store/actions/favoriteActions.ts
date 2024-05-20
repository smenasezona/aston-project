import { Dispatch } from "redux";
import { ADD_TO_LIST, DELETE_FROM_LIST, UPDATE_POST_LIST, FILLING_ID_LIST } from "./actionsTypes";
import { FillingIdList, SetAddTypes, SetDeleteTypes, UpdatePostList } from "../../types/favoriteTypes";
import { getFavoriteFromLocalStorage } from "../../utils/getFavoriteFromLocalStorage";


export const addToListAction = (id:number) => {
    return (dispatch:Dispatch,getState:any) =>{
        dispatch({type:ADD_TO_LIST, payload:id})

        const obj = getFavoriteFromLocalStorage()

        obj[getState().auth.user] = getState().favorite.idList
        localStorage.setItem('favorite',JSON.stringify(obj))
    }
}

export const deleteFromListAction = (id:number) => {
    return (dispatch:Dispatch,getState:any) =>{
        dispatch({type:DELETE_FROM_LIST, payload:id})

        const obj = getFavoriteFromLocalStorage()

        obj[getState().auth.user] = getState().favorite.idList
        localStorage.setItem('favorite',JSON.stringify(obj))
    }
}

export const updatePostList = (arr:Array<{}>): UpdatePostList => ({
    type: UPDATE_POST_LIST,
    payload: arr
})

export const fillingIdList = () => {
    return (dispatch:Dispatch, getState:any) => {
        dispatch({type:FILLING_ID_LIST,payload:getState().auth.user})
    }
}
    
