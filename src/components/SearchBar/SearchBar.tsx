// components/SearchBar.tsx
import SearchIcon from '@mui/icons-material/Search'
import { Autocomplete, Tooltip } from '@mui/material'
import React from 'react'
import {
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from '../../styles/searchStyles'
import useAPI from '../../utils/hooks/useAPI'

const SearchBar: React.FC = () => {
	const API = useAPI()

	return <Tooltip title='Open settings'>
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<Autocomplete
				onKeyUp={(event) => {
					if (event.code === 'Enter') {
						API.search()
					}
				}}
				onInputChange={(_, value) => {
					API.updateQuery({name:value})
					API.updateSuggestions({name:value})
				}}
				getOptionKey={(option)=>option.id}
				getOptionLabel={(option)=>option.name}
				isOptionEqualToValue={(option,value)=>option.id === value.id}
				disablePortal
				id="combo-box-demo"
				options={API.suggestions}
				sx={{ width: 300 }}
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
