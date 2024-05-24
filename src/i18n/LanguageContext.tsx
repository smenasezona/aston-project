import React, { ReactNode, createContext, useContext, useState } from 'react'
import translations, { Translation, Translations } from './translation'

type Language = keyof Translations

interface LanguageContextType {
	language: Language
	switchLanguage: (lang: Language) => void
	t: (key: keyof Translation) => string | number
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

type LanguageProviderProps = {
	children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
	const lang = localStorage.getItem('lang') ? (localStorage.getItem('lang') as Language) : 'ru'
	const [language, setLanguage] = useState<Language>(lang)

	const switchLanguage = (lang: Language) => {
		setLanguage(lang)
		localStorage.setItem('lang', lang)
	}

	const t = (key: keyof Translation) => {
		return translations[language][key] || key
	}

	return <LanguageContext.Provider value={{ language, switchLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('Ошибка в конексте i18n')
	}

	return context
}
