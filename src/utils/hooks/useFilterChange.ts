import { useCallback } from 'react'
import { Filters } from '../../types/filtersTypes'
import { QueryParams } from '../../types/queryTypes'
import useAPI from './useAPI'

const useFilterChange = () => {
	const { updateQuery, search } = useAPI()

	const handleFilterChange = useCallback(
		(filters: Filters) => {
			const queryParams: Partial<QueryParams> = {}

			if (filters.name) queryParams.name = filters.name
			if (filters.species) queryParams.species = filters.species

			const status = (Object.keys(filters.status) as (keyof Filters['status'])[]).find(key => filters.status[key])
			const gender = (Object.keys(filters.gender) as (keyof Filters['gender'])[]).find(key => filters.gender[key])

			if (status) queryParams.status = status
			if (gender) queryParams.gender = gender

			updateQuery(queryParams)
			search(queryParams)
		},
		[updateQuery, search],
	)

	return handleFilterChange
}

export default useFilterChange
