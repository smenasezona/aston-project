import Grid from '@mui/material/Grid'
import { memo } from 'react'
import { Character } from '../../types/queryTypes'
import CardItem from '../CardItem/CardItem'

type GridContainerProps = {
	characters: Character[]
}

function GridContainer(props: GridContainerProps) {
	return (
		<Grid
			sx={{ flexGrow: 1, maxWidth: '1440px', margin: '0 auto' }}
			container
			spacing={2}
			style={{ marginTop: '5rem' }}
		>
			{/* <FilterMenu onFilterChange={handleFilterChange} /> */}
			<Grid item xs={12}>
				<Grid container justifyContent='start' spacing={10}>
					{props.characters &&
						props.characters.map(character => (
							<Grid key={character.id} item xs={2.4}>
								<CardItem {...character} />
							</Grid>
						))}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default memo(GridContainer)
