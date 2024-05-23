import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	TextField,
	Typography,
} from '@mui/material'
import React, { ChangeEvent, useState } from 'react'

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

interface FilterMenuProps {
	onFilterChange: (filters: Filters) => void
}

const FilterMenu: React.FC<FilterMenuProps> = ({ onFilterChange }) => {
	const [filters, setFilters] = useState<Filters>({
		name: '',
		status: {
			alive: false,
			dead: false,
			unknown: false,
		},
		species: '',
		type: '',
		gender: {
			female: false,
			male: false,
			genderless: false,
			unknown: false,
		},
	})

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value, type } = event.target
		const checked = type === 'checkbox' ? (event.target as HTMLInputElement).checked : undefined

		setFilters(prevFilters => {
			if (type === 'checkbox') {
				const [key, subKey] = name.split('.') as [keyof Filters, string]
				if (typeof prevFilters[key] === 'object' && prevFilters[key] !== null) {
					return {
						...prevFilters,
						[key]: {
							...(prevFilters[key] as Record<string, boolean>),
							[subKey]: checked,
						},
					}
				}
			} else {
				return {
					...prevFilters,
					[name]: value,
				}
			}
			return prevFilters
		})
	}

	const handleApplyFilters = () => {
		onFilterChange(filters)
	}

	return (
		<Box sx={{ p: 3 }}>
			<Button variant='contained' color='primary' onClick={() => setIsMenuOpen(prev => !prev)}>
				{isMenuOpen ? 'Скрыть' : 'Фильтры'}
			</Button>
			{isMenuOpen && (
				<Box mt={2}>
					<TextField
						label='Species'
						name='species'
						value={filters.species}
						onChange={handleChange}
						fullWidth
						margin='normal'
					/>
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography>Status</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormGroup>
								<FormControlLabel
									control={<Checkbox checked={filters.status.alive} onChange={handleChange} name='status.alive' />}
									label='Alive'
								/>
								<FormControlLabel
									control={<Checkbox checked={filters.status.dead} onChange={handleChange} name='status.dead' />}
									label='Dead'
								/>
								<FormControlLabel
									control={<Checkbox checked={filters.status.unknown} onChange={handleChange} name='status.unknown' />}
									label='Unknown'
								/>
							</FormGroup>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography>Gender</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormGroup>
								<FormControlLabel
									control={<Checkbox checked={filters.gender.female} onChange={handleChange} name='gender.female' />}
									label='Female'
								/>
								<FormControlLabel
									control={<Checkbox checked={filters.gender.male} onChange={handleChange} name='gender.male' />}
									label='Male'
								/>
								<FormControlLabel
									control={
										<Checkbox checked={filters.gender.genderless} onChange={handleChange} name='gender.genderless' />
									}
									label='Genderless'
								/>
								<FormControlLabel
									control={<Checkbox checked={filters.gender.unknown} onChange={handleChange} name='gender.unknown' />}
									label='Unknown'
								/>
							</FormGroup>
						</AccordionDetails>
					</Accordion>
					<Button variant='contained' color='primary' onClick={handleApplyFilters} sx={{ mt: 2 }}>
						Apply Filters
					</Button>
				</Box>
			)}
		</Box>
	)
}

export default FilterMenu
