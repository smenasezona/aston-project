import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Favorite from './screens/favorite/Favorite'
import Home from './screens/home/Home'
import History from './screens/history/History'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import withAuth from './utils/hoc/withAuth'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from './store/store'
import { fetchCharactersById } from './api/api'
import { fillingIdList, updatePostList } from './store/actions/favoriteActions'
import { useTheme } from './context/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import NotFoundPage from './screens/NotFoundPage/NotFoundPage'

const AppContent: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const idList = useSelector((state: any) => state.favorite.idList)
	const user = useSelector((state: any) => state.auth.user)

	const { isDark } = useTheme()

	useEffect(() => {
		dispatch(fillingIdList())
	}, [user])

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (idList.length) {
					const fetchedCharacters = await fetchCharactersById(...idList)
					dispatch(updatePostList(fetchedCharacters))
				} else {
					dispatch(updatePostList([]))
				}
			} catch (error) {
				console.error('Error fetching characters:', error)
			}
		}
		fetchData()
	}, [idList, user, dispatch])

	return (
		<div className={`app ${isDark ? 'dark' : 'light'}`}>
			<ErrorBoundary>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route element={<PrivateRoute />}>
						<Route path='/favorite' element={<Favorite />} />
					</Route>
					<Route element={<PrivateRoute />}>
						<Route path='/history' element={<History />} />
					</Route>
					<Route />
					<Route path={'*'} element={<NotFoundPage />} />
				</Routes>
			</ErrorBoundary>
		</div>
	)
}

const App = withAuth(AppContent)

export default App