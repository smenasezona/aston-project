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

function CharacterDetails() {
	const { id } = useParams()
	const [character, setCharacter] = useState<Character | null>(null)

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
						bgcolor: 'background.paper',
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<AbcIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary='Name' secondary={character.name} />
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<ExposureIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary='Status' secondary={character.status} />
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<AdbIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary='Species' secondary={character.species} />
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<WcIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary='Gender' secondary={character.gender} />
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<LocationOnIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary='Location' secondary={character.location.name} />
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
