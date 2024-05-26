import AbcIcon from '@mui/icons-material/Abc'
import AdbIcon from '@mui/icons-material/Adb'
import ExposureIcon from '@mui/icons-material/Exposure'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WcIcon from '@mui/icons-material/Wc'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import CircularProgress from '@mui/material/CircularProgress'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import { memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCharactersById } from '../../api/api'
import { Character } from '../../types/queryTypes'
import ToRootButton from '../ui/ToRootButton/ToRootButton'
import { useLanguage } from '../../i18n/LanguageContext'
import { useTheme } from '../../context/ThemeContext'
import styles from './CharacterDetails.module.scss'

function CharacterDetails() {
	const { id } = useParams()
	const [character, setCharacter] = useState<Character | null>(null)
	const { t } = useLanguage()
	const { theme } = useTheme()


	useEffect(() => {
		if (typeof id !== 'undefined') {
			fetchCharactersById(+id)
				.then(res => {
					setCharacter(res)
				})
				.catch(() => {
					setCharacter(null)
				})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (!character) {
		return (
			<Box sx={{ display: 'flex', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
				<CircularProgress />
			</Box>
		)
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column-reverse',
				alignItems: 'center',
				height: '72vh',
			}}
		>
			<div>
				<List
					sx={{
						width: '100%',
						maxWidth: 360,
						bgcolor: theme === 'dark' ? '#4d4f54' : '#fefefe',
						color: theme === 'dark' ? '#fefefe' : '#101010',
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						borderRadius: '0.3rem',
						boxShadow: '3px 10px 13px -7px rgba(0,0,0,0.65)',
					}}
				>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<AbcIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText classes={{ secondary: theme === 'dark' ? styles.secondary : '' }} primary={t('name')}
													secondary={character.name} />
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<ExposureIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText classes={{ secondary: theme === 'dark' ? styles.secondary : '' }} primary={t('status')}
													secondary={character.status} />
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<AdbIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText classes={{ secondary: theme === 'dark' ? styles.secondary : '' }} primary={t('species')}
													secondary={character.species} />
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<WcIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText classes={{ secondary: theme === 'dark' ? styles.secondary : '' }} primary={t('gender')}
													secondary={character.gender} />
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<LocationOnIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText classes={{ secondary: theme === 'dark' ? styles.secondary : '' }} primary={t('location')}
													secondary={character.location.name} />
					</ListItem>
				</List>
				<CardMedia
					sx={{
						height: 300,
						width: 300,
						borderRadius: '50%',
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(10%, -50%)',
					}}
					image={character.image ?? 'https://robohash.org/38.180.2.10.png'}
					title={character.name}
				/>
			</div>
			<ToRootButton />
		</div>
	)
}

export default memo(CharacterDetails)
