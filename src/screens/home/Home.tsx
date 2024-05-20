import { useDispatch, useSelector } from 'react-redux'
import GridContainer from '../../components/GridContainer/GridContainer'
import { AppDispatch, RootState } from '../../store/store'
import { SearchState } from '../../store/reducers/searchReducers'
import CustomPagination from '../../components/CustomPagination/CustomPagination'
import { useLocation } from 'react-router-dom'
import { filterParams } from '../../api/characterSuggestion'
import { returnInitialQuery } from '../../api/api'
import { setCharacters, setSearchParamsAction } from '../../store/actions/searchActions'
import { useEffect } from 'react'

function Home() {
	const location = useLocation()
	const dispatch = useDispatch<AppDispatch>()
	const search = useSelector<RootState>((state) => state.search) as SearchState

	useEffect(() => {
		const updatedParams = {...returnInitialQuery(location.search) }
		console.log('return init',returnInitialQuery(location.search))
		dispatch(setSearchParamsAction(filterParams(updatedParams)))
		dispatch(setCharacters(filterParams(updatedParams)))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location])

	return (
		<>
			<GridContainer characters={search.characters} />
			<CustomPagination />
		</>
	)
}

export default Home