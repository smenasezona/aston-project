import { Box, Modal, Typography } from '@mui/material'
import { appModalStyles } from '../../styles/appModalStyles'

type Open = {
	isOpen: boolean
	content: string
}

type AppModalProps = {
	open: Open
	setOpen: (state: Open) => void
}

function AppModal(props: AppModalProps) {
	const getTitle = (content: string) => {
		return content === 'Вход' ? <span>Вход</span> : <span>Регистрация</span>
	}

	const handleClose = (open: Open, setOpen: (state: Open) => void) => {
		setOpen({ ...open, isOpen: !open.isOpen })
	}

	return (
		<Modal
			open={props.open.isOpen}
			onClose={() => handleClose(props.open, props.setOpen)}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={appModalStyles}>
				<Typography id='modal-modal-title' variant='h6' component='h2'>
					{getTitle(props.open.content)}
				</Typography>
				<Typography id='modal-modal-description' sx={{ mt: 2 }}>
					Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
				</Typography>
			</Box>
		</Modal>
	)
}

export default AppModal
