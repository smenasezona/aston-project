export interface Translation {
    [key:string]: string;
}
  
export interface Translations {
    ru: Translation;
    eng: Translation;
}



const translations:Translations = {
    ru: {
        favorite: "Избранное",
        history: "История",
        exit: "Выход",
        login: 'Войти',
        reg: 'Регистрация',
        details: 'Подробнее',
        username: 'Имя пользователя',
        password: 'Пароль',
        mail: 'Почта',
        register: 'Зарегистрироваться',
        welcome: '😊 Добро пожаловать!',
        emailexists: '🤨 Такой email уже существует',
        usernameexists: '🤨 Такой username уже существует',
        userandemailexists: '🤨 Такой username и email уже существуют',
        favoriteAdd: '🤨 Для добавления в избранное войдите в аккаунт'
    },
    eng: {
        favorite: "Favorites",
        history: "History",
        exit: "Exit",
        login: 'Log in',
        reg: 'Registration',
        details: 'More details',
        username: 'Username',
        password: 'Password',
        mail: 'Mail',
        register: 'Register',
        welcome: '😊 Welcome',
        emailexists: '🤨 This email already exists',
        usernameexists: '🤨 This username already exists',
        userandemailexists: '🤨 This username and email already exists',
        favoriteAdd: '🤨 To add to favorites, log in to your account',
    }
};
  
export default translations;