import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../../store/store'
import { Outlet } from 'react-router-dom'


const PrivateRoute: React.FC = () => {
	const isAuth = useSelector((state: RootState) => state.auth.isAuth)

	return isAuth ? <Outlet /> : <Navigate to='/' />
}

export default PrivateRoute
