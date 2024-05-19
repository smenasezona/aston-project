import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { SearchState } from "../../store/reducers/searchReducers"
import { useNavigate } from "react-router-dom"
import { filterParams } from "../../api/characterSuggestion"
import { setSearchParamsAction, setSuggestions } from "../../store/actions/searchActions"
import { QueryParams } from "../../types/queryTypes"

export default function useAPI() {
  const dispatch = useDispatch<AppDispatch>()
  const search = useSelector<RootState>((state) => state.search) as SearchState
  const navigate = useNavigate()

  return {
    storedQuery: search.queryParams,
    charactersList: search.characters,
    suggestions: search.suggestions,
    search(params=filterParams(search.queryParams)) {
      const navigateParams = new URLSearchParams(params)
      navigate(`/?${navigateParams}`)
    },
    updateQuery(query:Partial<QueryParams>) {
      dispatch(setSearchParamsAction(query))
    },
    updateSuggestions(params=filterParams(search.queryParams)) {
      dispatch(setSuggestions(params))
    }
  }
}