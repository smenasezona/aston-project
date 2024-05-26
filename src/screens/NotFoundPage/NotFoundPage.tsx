import React from 'react'
import image from '../../assets/img.png'
import styles from '../../components/ui/ToRootButton/NotFoundPage.module.scss'
import ToRootButton from '../../components/ui/ToRootButton/ToRootButton'

const NotFoundPage: React.FC = () => {
	return (
		<div className={styles.container}>
			<img className={styles.image} src={image} alt='rick' />
			<p className={styles.text}>Такой страницы не существует :(</p>

			<ToRootButton />
		</div>
	)
}

export default NotFoundPage
