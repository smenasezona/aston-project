import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/img.png'
import styles from './NotFoundPage.module.scss'

const NotFoundPage: React.FC = () => {
	return (
		<div className={styles.container}>
			<img className={styles.image} src={image} alt='rick' />
			<p className={styles.text}>Такой страницы не существует :(</p>

			<Button variant='outlined' sx={{ marginY: '1.2rem' }}>
				<Link className={styles.link} to='/'>
					Вернуться на главную
				</Link>
			</Button>
		</div>
	)
}

export default NotFoundPage
