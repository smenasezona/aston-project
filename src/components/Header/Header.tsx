import {
	AppBar,
	Box,
	Button,
	Container,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import useHeaderState from '../../utils/hooks/useHeaderState'
import AppModal from '../AppModal/AppModal'
import NavMenu from '../NavMenu/NavMenu'
import SearchBar from '../SearchBar/SearchBar'
import { AppDispatch } from '../../store/store'
import { logout } from '../../store/actions/authActions'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '../../context/ThemeContext'

const pages = ['Вход', 'Регистрация']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

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

	const dispatch = useDispatch<AppDispatch>()

	const modalIsOpen = useSelector((state: any) => state.modal.modalIsOpen)
	const isAuth = useSelector((state:any) => state.auth.isAuth)
	const user = useSelector((state:any) => state.auth.user)

	const handleExit = () => {
		dispatch(logout());
	}

	useEffect(() => {
		if (isAuth) {
			setOpen({...open, isOpen:false});
		}
	},[isAuth])

	const {isDark, toggleTheme} = useTheme();

	return (
		<AppBar
			position='static'
			sx={{
				backgroundColor: '#1399a7',
			}}
		>
			<Container maxWidth={false}>
				<Toolbar disableGutters>
					<Typography
						variant='h5'
						noWrap
						component='a'
						href='#app-bar-with-responsive-menu'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'Arial',
							fontWeight: 600,
							letterSpacing: '.1rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						Waifu
					</Typography>

					<NavMenu
						pages={pages}
						anchorElNav={anchorElNav}
						handleOpenNavMenu={handleOpenNavMenu}
						handleCloseNavMenu={handleCloseNavMenu}
						handleClick={handleClick}
					/>

					<Typography
						variant='h5'
						noWrap
						component='a'
						href='#app-bar-with-responsive-menu'
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'Arial',
							fontWeight: 600,
							letterSpacing: '.1rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						Waifu
					</Typography>
					
					{!isAuth ?
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map(page => (
							<Button
								key={page}
								onClick={() => handleClick(page)}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box>
					:
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Link to={'/favorite'}><Button sx={{ my: 2, color: 'white', display: 'block' }}>Избранное</Button></Link>
							<Link to={'/history'}><Button sx={{ my: 2, color: 'white', display: 'block' }}>История</Button></Link>
					</Box>
					}
					<Button onClick={toggleTheme}>
      		  <LightModeIcon sx={{ color: 'white', scale: '1.2' }}/>
      		</Button>
					<Box sx={{ flexGrow: 0 }}>
						<SearchBar />
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
						>
							{settings.map(setting => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign='center'>{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					{isAuth && <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleExit}>Выйти</Button>
						<Button sx={{ my: 2, color: 'white', display: 'block' }}>{user}</Button>
					</Box>}
				</Toolbar>
			</Container>
			{modalIsOpen && <AppModal open={open} setOpen={setOpen}></AppModal>}
		</AppBar>
	)
}

export default Header
