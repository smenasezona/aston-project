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

function Home() {
	const location = useLocation()
	const dispatch = useDispatch<AppDispatch>()
	const search = useSelector<RootState>((state) => state.search) as SearchState

	const page = useSelector((state: RootState) => state.page.page)

	useEffect(() => {
		const updatedParams = { ...filterParams(search.queryParams), ...returnInitialQuery(location.search) }
		dispatch(setSearchParamsAction(filterParams(updatedParams)))
		dispatch(setCharacters(filterParams(updatedParams)))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location])

	useEffect(() => {
		const queryParams: Partial<QueryParams> = { page: String(page) }
		dispatch(setCharacters(queryParams))
	}, [dispatch, page])

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