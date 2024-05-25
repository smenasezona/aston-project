import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { returnInitialQuery } from '../../api/api'
import { filterParams } from '../../api/characterSuggestion'
import CustomPagination from '../../components/CustomPagination/CustomPagination'
import GridContainer from '../../components/GridContainer/GridContainer'
import { setCharacters } from '../../store/actions/searchActions'
import { AppDispatch } from '../../store/store'
import useAPI from '../../utils/hooks/useAPI'

function Home() {
	const location = useLocation()
	const API = useAPI()
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		const updatedParams = { ...returnInitialQuery(location.search) }
		API.updateQuery(filterParams(updatedParams))
		dispatch(setCharacters(filterParams(updatedParams)))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location])

	const switchSearchPage: (event: React.ChangeEvent<unknown>, newPage: number) => void = (_, newPage) => {
		const newQuery = { ...filterParams(API.storedQuery), page: `${newPage}` }
		API.updateQuery(newQuery)
		API.search(newQuery)
	}

	return (
		<>
			<GridContainer characters={API.charactersList} />
			<CustomPagination
				pageCount={API.pagesCount}
				onPageChange={switchSearchPage}
				currentPage={+API.storedQuery.page}
			/>
		</>
	)
}

export default Home
