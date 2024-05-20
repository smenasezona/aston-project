import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../../store/store'
import { setCharacters } from '../../store/actions/searchActions'
import { setPage } from '../../store/actions/pageActions'

const usePageManagement = (initialLoad: boolean) => {
	const dispatch = useDispatch<AppDispatch>()
	const location = useLocation()
	const navigate = useNavigate()
	const page = useSelector((state: RootState) => state.page.page)

	useEffect(() => {
		if (!initialLoad) {
			const queryParams = { page: String(page) }
			dispatch(setCharacters(queryParams))
			const params = new URLSearchParams(location.search)

			if (params.get('page') !== String(page)) {
				params.set('page', String(page))
				navigate({ search: params.toString() }, { replace: true })
			}
		}
	}, [page, navigate, location.search, dispatch, initialLoad])

	const handlePageChange = (newPage: number) => {
		dispatch(setPage(newPage))
	}

	return { page, handlePageChange }
}

export default usePageManagement
