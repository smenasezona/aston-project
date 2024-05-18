import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { SearchState } from "../../store/reducers/searchReducers"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { filterParams } from "../../api/characterSuggestion"
import { returnInitialQuery } from "../../api/api"
import { setCharacters, setSearchParamsAction } from "../../store/actions/searchActions"
import { QueryParams } from "../../types/queryTypes"

export default function useAPI() {
  const dispatch = useDispatch<AppDispatch>()
  const search = useSelector<RootState>((state) => state.search) as SearchState
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const updatedParams = { ...filterParams(search.queryParams), ...returnInitialQuery(location.search) }
    console.log('updated', updatedParams)
    dispatch(setSearchParamsAction(filterParams(updatedParams)))
    console.log('redux', search.queryParams)
    dispatch(setCharacters(filterParams(updatedParams)))
    console.log('useEffect')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

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
    }
  }
}