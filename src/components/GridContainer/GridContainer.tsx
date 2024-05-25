import Grid from '@mui/material/Grid'
import { memo } from 'react'
import { Character } from '../../types/queryTypes'
import CardItem from '../CardItem/CardItem'
import CardSkeleton from '../CardSkeleton/CardSkeleton'

type GridContainerProps = {
	characters: Character[]
	loading: boolean
}

function GridContainer(props: GridContainerProps) {
	return (
		<Grid sx={{ flexGrow: 1, maxWidth: '1440px', margin: '0 auto' }} container style={{ marginTop: '5rem' }}>
			<Grid item xs={12}>
				<Grid container justifyContent='start' spacing={8}>
					{props.loading
						? Array.from(new Array(10)).map((_, index) => (
								<Grid
									key={index}
									item
									lg={2.4}
									md={3}
									sm={4}
									xs={6}
									style={{ display: 'flex', justifyContent: 'center' }}
								>
									<CardSkeleton />
								</Grid>
						  ))
						: props.characters.map(character => (
								<Grid
									key={character.id}
									item
									lg={2.4}
									md={3}
									sm={4}
									xs={6}
									style={{ display: 'flex', justifyContent: 'center' }}
								>
									<CardItem {...character} />
								</Grid>
						  ))}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default memo(GridContainer)
