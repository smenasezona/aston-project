import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { AppBar, Box, Button, Container, Menu, Toolbar, Typography } from '@mui/material'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../i18n/LanguageContext'
import { logout } from '../../store/actions/authActions'
import { AppDispatch, RootState } from '../../store/store'
import { styles } from '../../styles/headerStyles'
import useFilterChange from '../../utils/hooks/useFilterChange'
import useHeaderState from '../../utils/hooks/useHeaderState'
import AppModal from '../AppModal/AppModal'
import FilterMenu from '../FilterMenu/FilterMenu'
import NavMenu from '../NavMenu/NavMenu'
import SearchBar from '../SearchBar/SearchBar'
import SelectorMUI from '../ui/Selector/SelectorMUI'

const pages = ['login', 'reg']

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

	const modalIsOpen = useSelector((state: RootState) => state.modal.modalIsOpen)
	const isAuth = useSelector((state: RootState) => state.auth.isAuth)
	const user = useSelector((state: RootState) => state.auth.user)
	const { theme, toggleTheme } = useTheme()
	const handleFilterChange = useFilterChange()

	const handleExit = useCallback(() => {
		dispatch(logout())
	}, [dispatch])

	useEffect(() => {
		if (isAuth) {
			setOpen({ ...open, isOpen: false })
		}
	}, [isAuth])

	return (
		<AppBar position='static' sx={styles.appBar}>
			<Container maxWidth={false}>
				<Toolbar disableGutters>
					<Link to={'/'}>
						<Typography variant='h6' noWrap sx={styles.linkTypography}>
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
						<Typography variant='h5' noWrap sx={styles.linkTypographySmall}>
							R&M Wiki
						</Typography>
					</Link>

					{!isAuth ? (
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{pages.map(page => (
								<Button key={page} onClick={() => handleClick(page)} sx={styles.button}>
									{t(page)}
								</Button>
							))}
						</Box>
					) : (
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Link to={'/favorite'}>
								<Button sx={styles.button}>{t('favorite')}</Button>
							</Link>
							<Link to={'/history'}>
								<Button sx={styles.button}>{t('history')}</Button>
							</Link>
						</Box>
					)}
					<SearchBar />
					<Box sx={{ display: 'flex' }}>
						<FilterMenu onFilterChange={handleFilterChange} />
						<Menu
							sx={styles.menu}
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
						{theme === 'dark' ? <DarkModeIcon sx={styles.iconButton} /> : <LightModeIcon sx={styles.iconButton} />}
					</Button>
					{isAuth && (
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							<Button sx={styles.button} onClick={handleExit}>
								{t('exit')}
							</Button>
							<Button sx={styles.button}>{user}</Button>
						</Box>
					)}
				</Toolbar>
			</Container>
			{modalIsOpen && <AppModal open={open} setOpen={setOpen} />}
		</AppBar>
	)
}

export default Header
