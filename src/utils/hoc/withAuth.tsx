import { CircularProgress } from '@mui/material'
import React, { ComponentType, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from '../../store/actions/authActions'
import { RootState } from '../../store/store'

type WithAuthProps = {
	isAuth: boolean
}

const withAuth = <P extends object>(WrappedComponent: ComponentType<P & WithAuthProps>) => {
	const WithAuthComponent: React.FC<P> = props => {
		const dispatch = useDispatch()
		const isAuth = useSelector((state: RootState) => state.auth.isAuth)
		const [loading, setLoading] = useState(true)

		useEffect(() => {
			dispatch(checkAuth())
			setLoading(false)
		}, [dispatch])

		if (loading)
			return (
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
					<CircularProgress />
				</div>
			)

		return <WrappedComponent {...props} isAuth={isAuth} />
	}

	return WithAuthComponent
}

export default withAuth
