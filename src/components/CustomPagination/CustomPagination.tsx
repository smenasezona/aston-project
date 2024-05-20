import { Stack } from '@mui/material'
import { Pagination } from '@mui/material'
import React from 'react'

type customPaginationProps = {
	page: number,
	onPageChange: (page: number) => void
}

const CustomPagination: React.FC<customPaginationProps> = ({ page, onPageChange }) => {

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		onPageChange(value)
	}

	return (
		<Stack spacing={2}>
			<Pagination count={42} page={page} onChange={handleChange} variant='outlined' shape='rounded' />
		</Stack>
	)
}

export default CustomPagination