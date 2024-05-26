import Cookies from 'js-cookie'
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextProps {
	toggleTheme: () => void
	theme: Theme
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const useTheme = (): ThemeContextProps => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}

interface ThemeProviderProps {
	children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const savedTheme = (Cookies.get('theme') as Theme) || 'light'
	const [theme, setTheme] = useState<Theme>(savedTheme)

	useEffect(() => {
		Cookies.set('theme', theme, { expires: 365, sameSite: 'None', secure: true })
	}, [theme])

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	const value = useMemo(() => ({ theme, toggleTheme }), [theme])

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
