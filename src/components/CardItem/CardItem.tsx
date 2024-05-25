import styled from '@emotion/styled'
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
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../i18n/LanguageContext'
import { SHOW_SNACKBAR } from '../../store/actions/actionsTypes'
import { addToListAction, deleteFromListAction } from '../../store/actions/favoriteActions'
import { AppDispatch, RootState } from '../../store/store'
import { Character } from '../../types/queryTypes'

function CardItem(props: Character) {
	const dispatch = useDispatch<AppDispatch>()

	const idList = useSelector((state: RootState) => state.favorite.idList)
	const user = useSelector((state: RootState) => state.auth.user)

	const { t } = useLanguage()
	const { theme } = useTheme()

	const handleAddToFavorite = () => {
		if (user) idList.includes(props.id) ? dispatch(deleteFromListAction(props.id)) : dispatch(addToListAction(props.id))
		else
			dispatch({
				type: SHOW_SNACKBAR,
				payload: t('favoriteAdd'),
			})
	}

	const FavoriteButton = styled(Button)(({ theme }) => ({
		position: 'absolute',
		top: '5px',
		right: '3px',
		width: '39px',
		height: '30px',
		borderRadius: '50%',
		backgroundColor: 'rgba(130, 130, 130, 0.9)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: 5,
		'&:hover': {
			backgroundColor: 'rgba(130, 130, 130, 0.7)',
		},
	}))

	return (
		<Card
			sx={{
				width: '13.8rem',
				height: '20.5rem',
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: theme === 'dark' ? '#4d4f54' : '#fefefe',
				color: theme === 'dark' ? '#fefefe' : '#101010',
			}}
		>
			<FavoriteButton onClick={handleAddToFavorite}>
				{idList.includes(props.id) ? (
					<FavoriteIcon style={{ color: 'red' }} />
				) : (
					<FavoriteBorderIcon style={{ color: '#47daeb' }} />
				)}
			</FavoriteButton>
			<CardMedia sx={{ height: 175 }} image={props.image ?? 'https://robohash.org/38.180.2.10.png'} title='title' />
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography
					sx={{ marginBottom: '.5rem', fontSize: '1.1rem', fontFamily: 'Inter' }}
					gutterBottom
					variant='h5'
					component='div'
				>
					{props.name ?? 'undefined'}
				</Typography>
				<Typography sx={{ marginBottom: '.5rem', fontSize: '1rem' }} gutterBottom variant='h5' component='div'>
					{props.species ?? 'undefined'}
				</Typography>
			</CardContent>
			<CardActions sx={{ marginTop: 'auto' }}>
				<Button size='small'>{t('details')}</Button>
			</CardActions>
		</Card>
	)
}

export default memo(CardItem)
