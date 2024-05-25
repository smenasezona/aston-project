import SearchIcon from '@mui/icons-material/Search'
import { Autocomplete, Tooltip } from '@mui/material'
import React, { useCallback, useRef } from 'react'
import {
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from '../../styles/searchStyles'
import useAPI from '../../utils/hooks/useAPI'
import { filterParams } from '../../api/characterSuggestion'
import styles from './SearchBar.module.scss'

const COOLDOWN_MS = 700;

const SearchBar: React.FC = () => {
	const API = useAPI()
	const cooldown = useRef(false)
	const stashedName = useRef<string | null>(null)

	const setCooldown = useCallback(
		(action: (name: string) => void) => {
			cooldown.current = true
			new Promise<boolean>((resolve) => {
				setTimeout(() => {
					resolve(false)
				}, COOLDOWN_MS)
			})
			.then(x => { cooldown.current = x })
			.then(() => {
				if (stashedName.current !== null) {
					action(stashedName.current)
					stashedName.current = null
				}
				})
		}, [])


	return <Tooltip title='Type Character name'>
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<Autocomplete
				freeSolo
				filterOptions={(x) => x.length ? x : [{ name: 'No options', id: '-1' }]}
				getOptionDisabled={(option) => option.id === '-1'}
				onKeyUp={(event) => {
					const input = event.target as HTMLInputElement

					if (event.code === 'Enter') {
						const newQuery = { ...filterParams(API.storedQuery), name: input.value, page: "1" }
						API.updateQuery(newQuery)
						API.search(newQuery)
					}
				}}
				onInputChange={(_, value) => {
					if (!cooldown.current) {
						setCooldown((name) => {
							API.updateQuery({ name })
							API.updateSuggestions({ name })
						})
						stashedName.current = null
						API.updateQuery({ name: value })
						API.updateSuggestions({ name: value })
					} else {
						stashedName.current = value
					}

				}}
				getOptionKey={(option) => (typeof option === 'string' ? option : option.id)}
				getOptionLabel={(option) => (typeof option === 'string' ? option : option.name)}
				isOptionEqualToValue={(option, value) => option.id === value.id}
				disablePortal
				id="combo-box-demo"
				options={API.suggestions}
				classes={{ popper: styles.popper }}
				renderInput={(params) => <StyledInputBase
					ref={params.InputProps.ref}
					inputProps={{ ...params.inputProps, ...{ 'aria-label': 'search' } }}
					autoFocus
					placeholder='Search…'
				/>}
			/>

		</Search>
	</Tooltip>
}

export default SearchBar
