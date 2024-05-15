import { Box, Modal, Typography } from '@mui/material'
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
	return (
		<Modal
			open={props.open.isOpen}
			onClose={() =>
				props.setOpen({ ...props.open, isOpen: !props.open.isOpen })
			}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={appModalStyles}>
				<Typography id='modal-modal-title' variant='h6' component='h2'>
					{props.open.content === 'Вход' ? <LoginForm /> : <RegForm />}
				</Typography>
			</Box>
		</Modal>
	)
}

export default AppModal
