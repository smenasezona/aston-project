export interface Filters {
	name: string
	status: {
		alive: boolean
		dead: boolean
		unknown: boolean
	}
	species: string
	type: string
	gender: {
		female: boolean
		male: boolean
		genderless: boolean
		unknown: boolean
	}
}

export type FilterMenuProps = {
	onFilterChange: (filters: Filters) => void
}
