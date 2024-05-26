import { Box, Modal, Snackbar, Typography } from '@mui/material'
import { memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from '../../store/actions/authActions'
import { hideSnackbar } from '../../store/actions/snackbarActions'
import { AppDispatch, RootState } from '../../store/store'
import { appModalStyles } from '../../styles/appModalStyles'
import LoginForm from '../Forms/LoginForm/LoginForm'
import RegForm from '../Forms/RegForm/RegForm'

type Open = {
	isOpen: boolean
	content: string
}

type AppModalProps = {
	open: Open
	setOpen: (state: Open) => void
}

function AppModal(props: AppModalProps) {
	const dispatch = useDispatch<AppDispatch>()
	const snackbar = useSelector((state: RootState) => state.snackbar)

	useEffect(() => {
		dispatch(checkAuth())
	}, [dispatch])

	const handleCloseSnackbar = useCallback(() => {
		dispatch(hideSnackbar)
	}, [dispatch])

	useEffect(() => {
		if (snackbar.snackbarOpen) {
			const timer = setTimeout(handleCloseSnackbar, 3000)
			return () => clearTimeout(timer)
		}
	}, [snackbar.snackbarOpen, handleCloseSnackbar])

	return (
		<>
			<Modal
				open={props.open.isOpen}
				onClose={() => props.setOpen({ ...props.open, isOpen: !props.open.isOpen })}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={appModalStyles}>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						{props.open.content === 'Войти' ? <LoginForm /> : <RegForm />}
					</Typography>
				</Box>
			</Modal>
			<Snackbar
				open={snackbar.snackbarOpen}
				message={snackbar.snackbarMessage}
				onClose={() => dispatch(hideSnackbar())}
			/>
		</>
	)
}

export default memo(AppModal)
