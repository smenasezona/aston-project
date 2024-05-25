import { AddSearchQuery } from "../../types/historyTypes"
import { ADD_SEARCH_QUERY } from "./actionsTypes"

export const addSearchQuery = (query: Record<string,string>): AddSearchQuery => ({
	type: ADD_SEARCH_QUERY,
	payload: {
        date: Date.now(),
        params: query
    },
})

export type HistoryActions = AddSearchQuery