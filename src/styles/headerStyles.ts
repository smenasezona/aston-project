export const styles = {
	appBar: {
		position: 'static',
	},
	linkTypography: {
		mr: 2,
		display: { xs: 'none', md: 'flex' },
		fontFamily: 'Inter',
		fontWeight: 500,
		letterSpacing: '.1rem',
		color: '#fafafa',
		textDecoration: 'none',
	},
	linkTypographySmall: {
		mr: 2,
		display: { xs: 'flex', md: 'none' },
		flexGrow: 1,
		fontFamily: 'Arial',
		fontWeight: 500,
		letterSpacing: '.1rem',
		color: '#fafafa',
		textDecoration: 'none',
	},
	button: {
		my: 1.35,
		display: { xs: 'none', md: 'flex' },
		fontFamily: 'Inter',
		fontWeight: 500,
		color: '#fafafa',
		textDecoration: 'none',
		'&:hover': {
			color: '#e3dede',
		},
	},
	menu: {
		mt: '45px',
	},
	iconButton: {
		color: 'white',
		scale: '1.2',
	},
}
