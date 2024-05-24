import { Pagination, Stack } from '@mui/material'
import React from 'react'

interface customPaginationProps {
	currentPage: number
	pageCount?: number
	onPageChange: (event: React.ChangeEvent<unknown>, newPage: number) => void
}

const CustomPagination: React.FC<customPaginationProps> = (props: customPaginationProps) => {
	return (
		<Stack spacing={2} justifyContent={'center'} alignItems={'center'} margin={'2rem'}>
			<Pagination
				count={props.pageCount || 1}
				page={props.currentPage}
				onChange={props.onPageChange}
				variant='outlined'
				shape='rounded'
			/>
		</Stack>
	)
}

export default CustomPagination
