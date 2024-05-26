import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { AppBar, Box, Button, Container, Menu, Toolbar, Typography } from '@mui/material'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../i18n/LanguageContext'
import { logout } from '../../store/actions/authActions'
import { AppDispatch } from '../../store/store'
import { QueryParams } from '../../types/queryTypes'
import useAPI from '../../utils/hooks/useAPI'
import useHeaderState from '../../utils/hooks/useHeaderState'
import AppModal from '../AppModal/AppModal'
import FilterMenu, { Filters } from '../FilterMenu/FilterMenu'
import NavMenu from '../NavMenu/NavMenu'
import SearchBar from '../SearchBar/SearchBar'
import SelectorMUI from '../ui/Selector/SelectorMUI'

const pages = ['login', 'reg']

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function Header() {
	const {
		anchorElNav,
		anchorElUser,
		open,
		handleOpenNavMenu,
		handleCloseNavMenu,
		handleCloseUserMenu,
		handleClick,
		setOpen,
	} = useHeaderState()

	const { t } = useLanguage()

	const dispatch = useDispatch<AppDispatch>()

	const modalIsOpen = useSelector((state: any) => state.modal.modalIsOpen)
	const isAuth = useSelector((state: any) => state.auth.isAuth)
	const user = useSelector((state: any) => state.auth.user)

	const { theme, toggleTheme } = useTheme()

	const { updateQuery, search } = useAPI()

	const handleExit = () => {
		dispatch(logout())
	}

	useEffect(() => {
		if (isAuth) {
			setOpen({ ...open, isOpen: false })
		}
	}, [isAuth])

	const handleFilterChange = useCallback(
		(filters: Filters) => {
			const queryParams: Partial<QueryParams> = {}

			if (filters.name) queryParams.name = filters.name
			if (filters.species) queryParams.species = filters.species

			const status = (Object.keys(filters.status) as (keyof Filters['status'])[]).find(key => filters.status[key])
			const gender = (Object.keys(filters.gender) as (keyof Filters['gender'])[]).find(key => filters.gender[key])

			if (status) queryParams.status = status
			if (gender) queryParams.gender = gender

			updateQuery(queryParams)
			search(queryParams)
		},
		[updateQuery, search],
	)

	return (
		<AppBar position='static'>
			<Container maxWidth={false}>
				<Toolbar disableGutters>
					<Link to={'/'}>
						<Typography
							variant='h6'
							noWrap
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'Inter',
								fontWeight: 500,
								letterSpacing: '.1rem',
								color: '#fafafa',
								textDecoration: 'none',
							}}
						>
							R&M Wiki
						</Typography>
					</Link>

					<NavMenu
						pages={pages.map(page => t(page).toString())}
						anchorElNav={anchorElNav}
						handleOpenNavMenu={handleOpenNavMenu}
						handleCloseNavMenu={handleCloseNavMenu}
						handleClick={handleClick}
						isAuth={isAuth}
						handleExit={handleExit}
						favorite={'favorite'}
						history={'history'}
						exit={'exit'}
					/>

					<Link to={'/'}>
						<Typography
							variant='h5'
							noWrap
							sx={{
								mr: 2,
								display: { xs: 'flex', md: 'none' },
								flexGrow: 1,
								fontFamily: 'Arial',
								fontWeight: 500,
								letterSpacing: '.1rem',
								color: '#fafafa',
								textDecoration: 'none',
							}}
						>
							R&M Wiki
						</Typography>
					</Link>

					{!isAuth ? (
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{pages.map(page => (
								<Button key={page} onClick={() => handleClick(page)} sx={{ my: 2, color: 'white', display: 'block' }}>
									{t(page)}
								</Button>
							))}
						</Box>
					) : (
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Link to={'/favorite'}>
								<Button
									sx={{
										my: 1.35,
										display: { xs: 'none', md: 'flex' },
										fontFamily: 'Inter',
										fontWeight: 500,
										color: '#fafafa',
										textDecoration: 'none',
										'&:hover': {
											color: '#e3dede',
										},
									}}
								>
									{t('favorite')}
								</Button>
							</Link>
							<Link to={'/history'}>
								<Button
									sx={{
										my: 1.35,
										display: { xs: 'none', md: 'flex' },
										fontFamily: 'Inter',
										fontWeight: 500,
										color: '#fafafa',
										textDecoration: 'none',
										'&:hover': {
											color: '#e3dede',
										},
									}}
								>
									{t('history')}
								</Button>
							</Link>
						</Box>
					)}
					<SearchBar />
					<Box sx={{ display: 'flex' }}>
						<FilterMenu onFilterChange={handleFilterChange} />
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						></Menu>
					</Box>
					<SelectorMUI />
					<Button onClick={toggleTheme}>
						{theme === 'dark' ? (
							<DarkModeIcon sx={{ color: 'white', scale: '1.2' }} />
						) : (
							<LightModeIcon sx={{ color: 'white', scale: '1.2' }} />
						)}
					</Button>
					{isAuth && (
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							<Button
								sx={{
									my: 1.35,
									display: { xs: 'none', md: 'flex' },
									fontFamily: 'Inter',
									fontWeight: 500,
									color: '#fafafa',
									textDecoration: 'none',
									'&:hover': {
										color: '#e3dede',
									},
								}}
								onClick={handleExit}
							>
								{t('exit')}
							</Button>
							<Button
								sx={{
									my: 1.35,
									display: { xs: 'none', md: 'flex' },
									fontFamily: 'Inter',
									fontWeight: 500,
									color: '#fafafa',
									textDecoration: 'none',
									'&:hover': {
										color: '#e3dede',
									},
								}}
							>
								{user}
							</Button>
						</Box>
					)}
				</Toolbar>
			</Container>
			{modalIsOpen && <AppModal open={open} setOpen={setOpen}></AppModal>}
		</AppBar>
	)
}

export default Header
