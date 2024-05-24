import Cookies from 'js-cookie'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type ThemeContextProps = {
	toggleTheme: () => void
	theme: string
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('error')
	}
	return context
}

interface ThemeProviderProps {
	children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const savedTheme = Cookies.get('theme') || 'light'
	const [theme, setTheme] = useState(savedTheme)

	useEffect(() => {
		Cookies.set('theme', theme, { expires: 365, sameSite: 'None', secure: true })
	}, [theme])

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
