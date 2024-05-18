import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Favorite from './screens/favorite/Favorite'
import Home from './screens/home/Home'
import History from './screens/history/History'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import withAuth from './utils/hoc/withAuth'


const AppContent: React.FC = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/favorite' element={<Favorite />} />
				<Route element={<PrivateRoute />}>
					<Route path='/history' element={<History />} />
				</Route>
			</Routes>
		</>
	)
}

const App = withAuth(AppContent)

export default App
