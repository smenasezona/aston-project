// components/SearchBar.tsx
import SearchIcon from '@mui/icons-material/Search'
import { Tooltip } from '@mui/material'
import React from 'react'
import {
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from '../../styles/searchStyles'

const SearchBar: React.FC = () => (
	<Tooltip title='Open settings'>
		<Search onClick={console.log}>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder='Search…'
				inputProps={{ 'aria-label': 'search' }}
				onInput={console.log}
			/>
		</Search>
	</Tooltip>
)

export default SearchBar
