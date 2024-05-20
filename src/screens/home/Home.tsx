import { useSelector } from 'react-redux'
import GridContainer from '../../components/GridContainer/GridContainer'
import { RootState } from '../../store/store'
import { SearchState } from '../../store/reducers/searchReducers'
import CustomPagination from '../../components/CustomPagination/CustomPagination'
import useInitialLoad from '../../utils/hooks/useInitialLoad'
import usePage from '../../utils/hooks/usePage'

function Home() {

	const search = useSelector<RootState>((state) => state.search) as SearchState
	const initialLoad = useInitialLoad()
	const { page, handlePageChange } = usePage(initialLoad)

	return (
		<>
			{/*<CustomPagination page={page} onPageChange={handlePageChange} />*/}
			<GridContainer characters={search.characters} />
			<CustomPagination page={page} onPageChange={handlePageChange} />
		</>
	)
}

export default Home