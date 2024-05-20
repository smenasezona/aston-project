// components/NavMenu.tsx
import MenuIcon from '@mui/icons-material/Menu'
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React,{memo} from 'react'

type NavMenuProps = {
	pages: string[]
	anchorElNav: null | HTMLElement
	handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void
	handleCloseNavMenu: () => void
	handleClick: (page: string) => void
}

const NavMenu: React.FC<NavMenuProps> = ({
	pages,
	anchorElNav,
	handleOpenNavMenu,
	handleCloseNavMenu,
	handleClick,
}) => (
	<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
		<IconButton
			size='large'
			aria-label='account of current user'
			aria-controls='menu-appbar'
			aria-haspopup='true'
			onClick={handleOpenNavMenu}
			color='inherit'
		>
			<MenuIcon />
		</IconButton>
		<Menu
			id='menu-appbar'
			anchorEl={anchorElNav}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
			open={Boolean(anchorElNav)}
			onClose={handleCloseNavMenu}
			sx={{
				display: { xs: 'block', md: 'none' },
			}}
		>
			{pages.map(page => (
				<MenuItem key={page} onClick={() => handleClick(page)}>
					<Typography textAlign='center'>{page}</Typography>
				</MenuItem>
			))}
		</Menu>
	</Box>
)

export default memo(NavMenu)
