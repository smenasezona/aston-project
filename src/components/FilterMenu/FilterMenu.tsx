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
import { useLanguage } from '../../i18n/LanguageContext'

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

type FilterMenuProps = {
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
	const { t } = useLanguage()

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
				{isMenuOpen ? t('hide') : t('filters')}
			</Button>
			{isMenuOpen && (
				<Box mt={2}>
					<TextField
						label={t('species')}
						name='species'
						value={filters.species}
						onChange={handleChange}
						fullWidth
						margin='normal'
					/>
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography>{t('status')}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormGroup>
								<FormControlLabel
									control={<Checkbox checked={filters.status.alive} onChange={handleChange} name='status.alive' />}
									label={t('alive')}
								/>
								<FormControlLabel
									control={<Checkbox checked={filters.status.dead} onChange={handleChange} name='status.dead' />}
									label={t('dead')}
								/>
								<FormControlLabel
									control={<Checkbox checked={filters.status.unknown} onChange={handleChange} name='status.unknown' />}
									label={t('unknown')}
								/>
							</FormGroup>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography>{t('gender')}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormGroup>
								<FormControlLabel
									control={<Checkbox checked={filters.gender.female} onChange={handleChange} name='gender.female' />}
									label={t('female')}
								/>
								<FormControlLabel
									control={<Checkbox checked={filters.gender.male} onChange={handleChange} name='gender.male' />}
									label={t('male')}
								/>
								<FormControlLabel
									control={
										<Checkbox checked={filters.gender.genderless} onChange={handleChange} name='gender.genderless' />
									}
									label={t('genderless')}
								/>
								<FormControlLabel
									control={<Checkbox checked={filters.gender.unknown} onChange={handleChange} name='gender.unknown' />}
									label={t('unknown')}
								/>
							</FormGroup>
						</AccordionDetails>
					</Accordion>
					<Button variant='contained' color='primary' onClick={handleApplyFilters} sx={{ mt: 2 }}>
						{t('applyFilters')}
					</Button>
				</Box>
			)}
		</Box>
	)
}

export default FilterMenu
