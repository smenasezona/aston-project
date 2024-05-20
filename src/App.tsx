import React, { memo, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
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
import { getFavoriteFromLocalStorage } from './utils/getFavoriteFromLocalStorage'




const AppContent: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const idList = useSelector((state:any) => state.favorite.idList)
	const user = useSelector((state:any) => state.auth.user)

	useEffect(() => {
		dispatch(fillingIdList())
	},[user])

	useEffect(() => {
		const fetchData = async () => {
		  try {
			if (idList.length){
				const fetchedCharacters = await fetchCharactersById(...idList)
				dispatch(updatePostList(fetchedCharacters))
			}
			else{
				dispatch(updatePostList([]))
			}
		  } catch (error) {
			console.error('Error fetching characters:', error)
		  }
		};
		fetchData()
	  }, [idList,user,dispatch])

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route element={<PrivateRoute />}>
					<Route path='/favorite' element={<Favorite />} />
				</Route>
				<Route element={<PrivateRoute />}>
					<Route path='/history' element={<History />} />
				</Route>
			</Routes>
		</>
	)
}

const App = withAuth(AppContent)

export default App
