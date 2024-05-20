import { Stack } from '@mui/material'
import { Pagination } from '@mui/material'
import React from 'react'
import useAPI from '../../utils/hooks/useAPI'
import { filterParams } from '../../api/characterSuggestion'


type customPaginationProps = {}

const CustomPagination: React.FC<customPaginationProps> = () => {
	const  API = useAPI()
	console.log('query from pages',API.storedQuery)
	return (
		<Stack spacing={2} justifyContent={'center'} alignItems={'center'} margin={'2rem'}>
			<Pagination count={API.pagesCount || 1} page={+API.storedQuery.page} onChange={(_,page)=>{
				const newQuery = {...filterParams(API.storedQuery),page:`${page}`}
				console.log(newQuery)
				API.updateQuery(newQuery)
				API.search(newQuery)
			}} variant='outlined' shape='rounded' />
		</Stack>
	)
}

export default CustomPagination