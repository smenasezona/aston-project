import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import '../src/styles/adaptive-fonts.scss'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './i18n/LanguageContext'
import './index.css'
import store from './store/store'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProvider>
					<LanguageProvider>
						<App />
					</LanguageProvider>
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
)
