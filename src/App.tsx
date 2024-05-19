import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Favorite from './screens/favorite/Favorite'
import Home from './screens/home/Home'
import History from './screens/history/History'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import withAuth from './utils/hoc/withAuth'
import { useTheme } from './context/ThemeContext'


const AppContent: React.FC = () => {
	const {isDark} = useTheme();
	return (
		<>
			<div className={`app ${isDark ? "dark" : "light"}`}>
				<Header />
				<Routes >
					<Route path='/' element={<Home />} />
					<Route path='/favorite' element={<Favorite />} />
					<Route element={<PrivateRoute />}>
						<Route path='/history' element={<History />} />
					</Route>
				</Routes>
			</div>
		</>
	)
}

const App = withAuth(AppContent)

export default App
