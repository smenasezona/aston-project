import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { fetchCharactersById } from './api/api'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Header from './components/Header/Header'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { useTheme } from './context/ThemeContext'
import NotFoundPage from './screens/NotFoundPage/NotFoundPage'
import Favorite from './screens/favorite/Favorite'
import History from './screens/history/History'
import Home from './screens/home/Home'
import { fillingIdList, updatePostList } from './store/actions/favoriteActions'
import { AppDispatch } from './store/store'
import withAuth from './utils/hoc/withAuth'

const AppContent: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const idList = useSelector((state: any) => state.favorite.idList)
	const user = useSelector((state: any) => state.auth.user)

	const { theme } = useTheme()

	useEffect(() => {
		dispatch(fillingIdList())
	}, [user, dispatch])

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
		<div className={`app ${theme}`}>
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
