import { useState } from 'react'

const useHeaderState = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
	const [open, setOpen] = useState({ isOpen: false, content: 'Войти' })

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	const handleClick = (page: string) => {
		handleCloseNavMenu()
		if (page == 'login' || page == 'Log in' || page == 'Login') page = 'Войти'
		setOpen(prevState => {
			return { ...prevState, isOpen: !open.isOpen, content: page }
		})
	}
	return {
		anchorElNav,
		anchorElUser,
		open,
		handleOpenNavMenu,
		handleCloseNavMenu,
		handleCloseUserMenu,
		handleClick,
		setOpen,
	}
}

export default useHeaderState
