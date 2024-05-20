import SearchIcon from '@mui/icons-material/Search'
import { Autocomplete, Tooltip } from '@mui/material'
import React from 'react'
import {
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from '../../styles/searchStyles'
import useAPI from '../../utils/hooks/useAPI'
import { filterParams } from '../../api/characterSuggestion'

const SearchBar: React.FC = () => {
	const API = useAPI()

	console.log('search bar rerender', API.storedQuery.name)
	return <Tooltip title='Open settings'>
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<Autocomplete
				freeSolo
				filterOptions={(x)=>x.length ? x:[{name:'No options', id:'-1'}]}
				getOptionDisabled={(option)=> option.id === '-1'}

				onKeyUp={(event) => {
					const input =event.target as HTMLInputElement

					if (event.code === 'Enter') {
						const newQuery =  {...filterParams(API.storedQuery),name:input.value,page:"1"}
						API.updateQuery(newQuery)
						API.search(newQuery)
					}
				}}
				onInputChange={(_, value) => {
					API.updateQuery({name:value})
					API.updateSuggestions({name:value})
				}}
				getOptionKey={(option)=>(typeof option === 'string' ? option: option.id)}
				getOptionLabel={(option)=>(typeof option === 'string' ? option: option.name)}
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
