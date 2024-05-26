import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const FilterContainer = styled(Box)(({ theme }) => ({
	position: 'absolute',
	top: '100%',
	right: 5,
	width: '19rem',
	backgroundColor: '#fafafa',
	zIndex: 1,
	boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.4)',
	borderRadius: '8px',
	padding: '20px',
	marginTop: '8px',
}))
