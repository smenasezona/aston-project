import { Box, Modal, Typography } from '@mui/material';
import RegForm from '../Forms/RegForm/RegForm';
import LoginForm from '../Forms/LoginForm/Form';

type Open = {
	isOpen: boolean
	content: string
}

type AppModalProps = {
	open: Open
	setOpen: (state: Open) => void
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function AppModal (props: AppModalProps) {
    return (
        <Modal
        open={props.open.isOpen}
        onClose={()=>props.setOpen({...props.open,isOpen:!props.open.isOpen})}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.open.content === 'Вход' ? <LoginForm/> : <RegForm/>}
          </Typography>
        </Box>
      </Modal>
    )
}

export default AppModal
