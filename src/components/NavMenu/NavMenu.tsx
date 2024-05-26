import MenuIcon from '@mui/icons-material/Menu'
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import { Translation } from '../../i18n/translation'

interface NavMenuProps {
	pages: string[]
	anchorElNav: null | HTMLElement
	handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void
	handleCloseNavMenu: () => void
	handleClick: (page: string) => void
	isAuth: boolean
	handleExit: () => void
	favorite: keyof Translation
	history: keyof Translation
	exit: keyof Translation
}

const NavMenu: React.FC<NavMenuProps> = ({
	pages,
	anchorElNav,
	handleOpenNavMenu,
	handleCloseNavMenu,
	handleClick,
	isAuth,
	handleExit,
	favorite,
	history,
	exit,
}) => {
	const { t } = useLanguage()
	return (
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
				{isAuth
					? [favorite, history, exit].map(label => {
							if (label === exit) {
								return (
									<MenuItem key={label} onClick={handleExit}>
										<Typography textAlign='center' color='error' fontWeight='700'>
											{t(exit)}
										</Typography>
									</MenuItem>
								)
							} else {
								return (
									<MenuItem key={label}>
										<Link to={`/${label}`}>
											<Typography textAlign='center'>{t(label)}</Typography>
										</Link>
									</MenuItem>
								)
							}
					  })
					: pages.map(page => (
							<MenuItem key={page} onClick={() => handleClick(page)}>
								<Typography textAlign='center'>{page}</Typography>
							</MenuItem>
					  ))}
			</Menu>
		</Box>
	)
}

export default memo(NavMenu)
