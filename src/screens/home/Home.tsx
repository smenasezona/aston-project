import { useSelector } from 'react-redux'
import GridContainer from '../../components/GridContainer/GridContainer'
import { AppDispatch, RootState } from '../../store/store'
import { useLocation } from 'react-router-dom'
import { filterParams } from '../../api/characterSuggestion'
import { SearchState } from '../../store/reducers/searchReducers'
import { returnInitialQuery } from '../../api/api'
import { useDispatch } from 'react-redux'
import { setCharacters, setSearchParamsAction } from '../../store/actions/searchActions'
import { useEffect } from 'react'
import { QueryParams } from '../../types/queryTypes'
import { setPage } from '../../store/actions/pageActions'
import CustomPagination from '../../components/CustomPagination/CustomPagination'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Home() {
	const location = useLocation()
	const dispatch = useDispatch<AppDispatch>()
	const search = useSelector<RootState>((state) => state.search) as SearchState

	const page = useSelector((state: RootState) => state.page.page)
	const navigate = useNavigate()
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialLoad, location.search])

	useEffect(() => {
		const queryParams: Partial<QueryParams> = { page: String(page) }
		dispatch(setCharacters(queryParams))
		const params = new URLSearchParams(location.search)

		if (params.get('page') !== String(page)) {
			params.set('page', String(page))
			navigate({ search: params.toString() }, { replace: true })
		}
	}, [page, navigate, location.search, dispatch, initialLoad])

	const handlePageChange = (newPage: number) => {
		dispatch(setPage(newPage))
	}

	return (
		<>
			<GridContainer characters={search.characters} />
			<CustomPagination page={page} onPageChange={handlePageChange} />
		</>
	)
}

export default Home