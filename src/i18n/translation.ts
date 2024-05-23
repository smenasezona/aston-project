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
        welcome: '😊 Добро пожаловать!'
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
        welcome: '😊 Welcome'
    }
};
  
export default translations;