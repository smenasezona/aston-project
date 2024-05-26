import { Button } from '@mui/material'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.scss'
const ToRootButton = () => {
	return (
		<div>
			<Button variant='outlined' sx={{ marginY: '1.2rem' }}>
				<Link className={styles.link} to='/'>
					Вернуться на главную
				</Link>
			</Button>
		</div>
	)
}

export default memo(ToRootButton)
