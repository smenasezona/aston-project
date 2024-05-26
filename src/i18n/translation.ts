export type Translation = {
	[key: string]: string
}

export type Translations = {
	ru: Translation
	eng: Translation
}

const translations: Translations = {
	ru: {
		favorite: 'Избранное',
		history: 'История',
		exit: 'Выход',
		login: 'Войти',
		reg: 'Регистрация',
		details: 'Подробнее',
		username: 'Имя пользователя',
		password: 'Пароль',
		mail: 'Почта',
		register: 'Зарегистрироваться',
		filters: 'Фильтры',
		hide: 'Скрыть',
		species: 'Вид',
		alive: 'Жив',
		dead: 'Мертв',
		unknown: 'Неизвестно',
		status: 'Статус',
		gender: 'Гендер',
		female: 'Женский',
		male: 'Мужской',
		genderless: 'Бесполый',
		applyFilters: 'Применить',
		welcome: '😊 Добро пожаловать!',
		emailexists: '🤨 Такой email уже существует',
		usernameexists: '🤨 Такой username уже существует',
		userandemailexists: '🤨 Такой username и email уже существуют',
		favoriteAdd: '🤨 Для добавления в избранное войдите в аккаунт',
		historyHeader: 'История запросов',
		historyEmptyText: 'История отсутствует',
		historyItemParametersHeader: 'Параметры запроса',
		historyItemTime: 'дата',
		location: 'Местоположение',
		name: 'Имя'
	},
	eng: {
		favorite: 'Favorites',
		history: 'History',
		exit: 'Exit',
		login: 'Login',
		reg: 'Registration',
		details: 'More details',
		username: 'Username',
		password: 'Password',
		mail: 'Mail',
		register: 'Register',
		filters: 'Filters',
		hide: 'Hide',
		species: 'Species',
		alive: 'Alive',
		dead: 'Dead',
		unknown: 'Unknown',
		status: 'Status',
		gender: 'Gender',
		female: 'Female',
		male: 'Male',
		genderless: 'Genderless',
		applyFilters: 'Apply',
		welcome: '😊 Welcome',
		emailexists: '🤨 This email already exists',
		usernameexists: '🤨 This username already exists',
		userandemailexists: '🤨 This username and email already exists',
		favoriteAdd: '🤨 To add to favorites, log in to your account',
		historyHeader:'Search history',
		historyEmptyText: 'History is empty',
		historyItemParametersHeader: 'Query parameters',
		historyItemTime: 'at',
		location: 'Location',
		name: 'Name',
	},
}

// @ts-ignore
export default translations
