import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import CustomPagination from '../../components/CustomPagination/CustomPagination'
import GridContainer from '../../components/GridContainer/GridContainer'
import { RootState } from '../../store/store'
import { useFavoriteData } from '../../utils/hooks/useFavoriteData'

function Favorite() {
	const postList = useSelector((state: RootState) => state.favorite.postList)
	const idList = useSelector((state: RootState) => state.favorite.idList)
	const location = useLocation()
	const navigate = useNavigate()

	const query = new URLSearchParams(location.search)
	const pageQuery = query.get('page')
	const initialPage = pageQuery ? parseInt(pageQuery, 10) : 1

	const { filteredArr, maxPage, page, setPage } = useFavoriteData(postList, idList, initialPage)

	const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
		setPage(newPage)
		navigate(`/favorite?page=${newPage}`)
	}

	return (
		<>
			<GridContainer loading={postList.length === 0} characters={filteredArr.slice(page * 20 - 20, page * 20)} />
			{maxPage > 1 && <CustomPagination pageCount={maxPage} currentPage={page} onPageChange={handlePageChange} />}
		</>
	)
}

export default Favorite
