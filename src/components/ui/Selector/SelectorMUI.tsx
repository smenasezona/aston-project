import LanguageIcon from '@mui/icons-material/Language'
import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import { MouseEvent, useState } from 'react'
import { useLanguage } from '../../../i18n/LanguageContext'
import { Translations } from '../../../i18n/translation'

export default function LanguageSelector() {
	const { language, switchLanguage } = useLanguage()
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = (lang?: keyof Translations) => {
		setAnchorEl(null)
		if (lang && lang !== language) {
			switchLanguage(lang)
		}
	}

	return (
		<Box>
			<IconButton onClick={handleClick} style={{ color: '#fff' }}>
				<LanguageIcon sx={{ color: 'white', scale: '1.2' }} />
			</IconButton>
			<Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose()}>
				<MenuItem onClick={() => handleClose('ru')}>Русский</MenuItem>
				<MenuItem onClick={() => handleClose('eng')}>English</MenuItem>
			</Menu>
		</Box>
	)
}
