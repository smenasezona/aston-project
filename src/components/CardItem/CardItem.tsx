import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLanguage } from '../../i18n/LanguageContext'
import { SHOW_SNACKBAR } from '../../store/actions/actionsTypes'
import { addToListAction, deleteFromListAction } from '../../store/actions/favoriteActions'
import { AppDispatch } from '../../store/store'
import { Character } from '../../types/queryTypes'

function CardItem(props: Character) {
	const dispatch = useDispatch<AppDispatch>()

	const idList = useSelector((state: any) => state.favorite.idList)
	const user = useSelector((state: any) => state.auth.user)

	const { t } = useLanguage()

	const handleAddToFavorite = () => {
		if (user) idList.includes(props.id) ? dispatch(deleteFromListAction(props.id)) : dispatch(addToListAction(props.id))
		else
			dispatch({
				type: SHOW_SNACKBAR,
				payload: t('favoriteAdd'),
			})
	}

	return (
		<Card sx={{ width: '13.3rem', height: '21rem', position: 'relative', paddingTop: '20px' }}>
			<Button style={{ position: 'absolute', top: '5px', right: '0px' }} onClick={handleAddToFavorite}>
				{idList.includes(props.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
			</Button>
			<CardContent>
				<Typography sx={{ height: '3.5rem', fontSize: '1rem' }} gutterBottom variant='h5' component='div'>
					{props.name ?? 'undefined'}
				</Typography>
			</CardContent>
			<CardMedia sx={{ height: 170 }} image={props.image ?? 'https://robohash.org/38.180.2.10.png'} title='title' />
			<CardActions>
				<Button size='small'>{t('details')}</Button>
			</CardActions>
		</Card>
	)
}

export default memo(CardItem)
