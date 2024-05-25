import { Pagination, Stack, styled } from '@mui/material'
import React from 'react'
import { useTheme } from '../../context/ThemeContext'

interface customPaginationProps {
	currentPage: number
	pageCount?: number
	onPageChange: (event: React.ChangeEvent<unknown>, newPage: number) => void
}

const CustomPagination: React.FC<customPaginationProps> = (props: customPaginationProps) => {
	const { theme } = useTheme()

	const CustomPagination = styled(Pagination)(() => ({
		'& .MuiPaginationItem-root': {
			borderColor: theme === 'dark' ? '#717274' : '#424242',
			color: theme === 'dark' ? '#fefefefe' : '#0f0f0f',
			'&:hover': {
				backgroundColor: 'rgba(0, 0, 255, 0.1)',
			},
			'&.Mui-selected': {
				backgroundColor: theme === 'dark' ? '#181a1f' : '##d7d6da',
				color: theme === 'dark' ? '#fefefefe' : '#0f0f0f',
			},
		},
	}))

	return (
		<Stack spacing={2} justifyContent={'center'} alignItems={'center'} margin={'2rem'}>
			<CustomPagination
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
