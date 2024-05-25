import { HistoryState } from '../../types/historyTypes'
import { ADD_SEARCH_QUERY } from '../actions/actionsTypes'
import { HistoryActions } from '../actions/historyActions'




const initalState: HistoryState = {
    queryList: []

}

export const historyReducer = (state = initalState, action: HistoryActions) => {
	switch (action.type) {
		case ADD_SEARCH_QUERY:
			return {...state, queryList:state.queryList.concat(action.payload)}
		default:
			return state
	}
}
