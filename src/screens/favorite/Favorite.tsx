import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import CustomPagination from '../../components/CustomPagination/CustomPagination'
import GridContainer from '../../components/GridContainer/GridContainer'
import { RootState } from '../../store/store'

function Favorite() {
	const [filteredArr, setFilteredArr] = useState<any[]>([])
	const postList = useSelector((state: RootState) => state.favorite.postList)
	const idList = useSelector((state: RootState) => state.favorite.idList)
	const location = useLocation()
	const navigate = useNavigate()
	const [loading, setLoading] = useState(true)

	const query = new URLSearchParams(location.search)
	const pageQuery = query.get('page')
	const initialPage = pageQuery ? parseInt(pageQuery, 10) : 1

	const [page, setPage] = useState<number>(initialPage)
	const [maxPage, setMaxPage] = useState<number>(Math.ceil(idList.length / 20))

	useEffect(() => {
		setMaxPage(Math.ceil(idList.length / 20))
		setFilteredArr([])
		for (let id of idList) {
			let match = postList.find((item: any) => item.id === id)
			if (match) {
				setFilteredArr(prev => [...prev, match])
				setLoading(false)
			}
		}
	}, [idList, postList])

	const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
		setPage(newPage)
		navigate(`/favorite?page=${newPage}`)
	}

	return (
		<>
			<GridContainer loading={loading} characters={filteredArr.slice(page * 20 - 20, page * 20)} />
			{maxPage > 1 && <CustomPagination pageCount={maxPage} currentPage={page} onPageChange={handlePageChange} />}
		</>
	)
}

export default Favorite
