import { Box, Card, CardContent, Skeleton } from '@mui/material'
import { useTheme } from '../../context/ThemeContext'

const CardSkeleton = () => {
	const { theme } = useTheme()

	return (
		<Card
			sx={{
				width: '13.8rem',
				height: '20.5rem',
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: theme === 'dark' ? '#4d4f54' : '#fefefe',
				color: theme === 'dark' ? '#fefefe' : '#101010',
			}}
		>
			<Skeleton variant='rectangular' width='100%' height={175} />
			<CardContent sx={{ flexGrow: 1 }}>
				<Skeleton variant='text' height={32} sx={{ marginBottom: '.5rem' }} />
				<Skeleton variant='text' height={32} sx={{ marginBottom: '.5rem' }} />
			</CardContent>
			<Box sx={{ marginTop: 'auto', padding: 2 }}>
				<Skeleton variant='text' width='40%' height={32} />
			</Box>
		</Card>
	)
}

export default CardSkeleton
