import { ADD_SEARCH_QUERY } from "../store/actions/actionsTypes"

export interface StoredQuery {
    date: number,
    params: Record<string,string>
}

export interface HistoryState {
	queryList: StoredQuery[]
}


export type AddSearchQuery = {
	type: typeof ADD_SEARCH_QUERY
	payload: StoredQuery
}
