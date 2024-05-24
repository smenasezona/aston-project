import Grid from '@mui/material/Grid'
import { memo } from 'react'
import { Character, QueryParams } from '../../types/queryTypes'
import useAPI from '../../utils/hooks/useAPI'
import CardItem from '../CardItem/CardItem'
import FilterMenu, { Filters } from '../FilterMenu/FilterMenu'

type GridContainerProps = {
	characters: Character[]
}

function GridContainer(props: GridContainerProps) {
	const { updateQuery, search } = useAPI()

	const handleFilterChange = (filters: Filters) => {
		const queryParams: Partial<QueryParams> = {}

		if (filters.name) queryParams.name = filters.name
		if (filters.species) queryParams.species = filters.species

		const status = (Object.keys(filters.status) as (keyof Filters['status'])[]).find(key => filters.status[key])
		const gender = (Object.keys(filters.gender) as (keyof Filters['gender'])[]).find(key => filters.gender[key])

		if (status) queryParams.status = status
		if (gender) queryParams.gender = gender

		updateQuery(queryParams)
		search(queryParams)
	}

	return (
		<Grid
			sx={{ flexGrow: 1, maxWidth: '1280px', margin: '0 auto' }}
			container
			spacing={3}
			style={{ marginTop: '20px' }}
		>
			<FilterMenu onFilterChange={handleFilterChange} />
			<Grid item xs={12}>
				<Grid container justifyContent='start' spacing={6}>
					{props.characters &&
						props.characters.map(character => (
							<Grid key={character.id} item>
								<CardItem {...character} />
							</Grid>
						))}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default memo(GridContainer)
