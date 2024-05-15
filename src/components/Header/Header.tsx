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
import useHeaderState from '../../utils/hooks/useHeaderState'
import AppModal from '../appModal/AppModal'
import NavMenu from '../NavMenu/NavMenu'
import SearchBar from '../SearchBar/SearchBar'

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
				</Toolbar>
			</Container>
			<AppModal open={open} setOpen={setOpen}></AppModal>
		</AppBar>
	)
}

export default Header
