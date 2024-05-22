import React from 'react'
import styles from './NotFoundPage.module.scss'
import { Link } from 'react-router-dom'
import image from '../../assets/img.png'
const NotFoundPage: React.FC = () => {
	return <div className={styles.container}>
		<img src={image} alt='rick' />
		<p className={styles.text}>К сожалению, такой страницы нет :(</p>
		<Link to='/'>Вернуться на главную</Link>
	</div>
}

export default NotFoundPage