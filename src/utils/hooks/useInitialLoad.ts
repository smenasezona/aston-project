import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { AppDispatch, RootState } from '../../store/store'
import { filterParams } from '../../api/characterSuggestion'
import { returnInitialQuery } from '../../api/api'
import { setCharacters, setSearchParamsAction } from '../../store/actions/searchActions'
import { setPage } from '../../store/actions/pageActions'
import { SearchState } from '../../store/reducers/searchReducers'

const useInitialLoad = () => {
	const location = useLocation()
	const dispatch = useDispatch<AppDispatch>()
	const search = useSelector<RootState, SearchState>((state) => state.search)
	const [initialLoad, setInitialLoad] = useState(true)

	useEffect(() => {
		if (initialLoad) {
			const params = new URLSearchParams(location.search)
			const pageFromURL = parseInt(params.get('page') || '1', 10)
			dispatch(setPage(pageFromURL))

			const updatedParams = { ...filterParams(search.queryParams), ...returnInitialQuery(location.search) }

			dispatch(setSearchParamsAction(filterParams(updatedParams)))
			dispatch(setCharacters(filterParams(updatedParams)))
			setInitialLoad(false)
		}
	}, [initialLoad, location.search])

	return initialLoad
}

export default useInitialLoad
