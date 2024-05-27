# Rick and Morty characters website.

## Над проектом работали:

- [Блинов Кирилл](https://github.com/protonio-gitH)
- [Кизилов Андрей](https://github.com/user42022)
- [Иванов Константин](https://github.com/IvanovKS)
- [Кияшко Артём](https://github.com/smenasezona)

### Основной стек проекта

Основной стек проекта составляет: **React**, **Typescript**, **Redux**, **MUI**, **React-router-dom V6**.  
Из второстепенных библиотек использовались: **React Hook Form**, **Yup**, **js-cookie**.  
В качестве API был выбран [The Rick and Morty API](https://rickandmortyapi.com/).

---

### Функционал

1. Реализована авторизация пользователей через Redux, данные сохраняются в localStorage.
2. Добавление карточек с персонажами в избранное. Вывод избранных карточек на странице происходит за счет нажатия по
   кнопке Избранное / Favorites. Реализовано через Redux + localStorage.
3. Добавлен поиск по карточкам с выводом подсказок, с последующим выводом запроса поиска на странице */history*.
   Реализовано через Redux + GraphQL.
4. Добавлена фильтрация карточек по:
   - Статусу
   - Гендеру
5. Добавлена смена цветовой темы сайта, создан кастомный хук `useTheme`. Реализовано через React Context API.
6. Добавлена смена языка сайта с помощью **i18n**.
7. На сайте реализована пагинация.
8. Также была добавлена кнопка **"Подробнее"**, по нажатию на которую открывается вкладка с подробным описанием
   персонажа, описание включает в себя:
    - Имя
    - Статус
    - Вид
    - Гендер
    - Местоположение
9. Добавлен ErrorBoundary класс для обработки ошибок.
10. Добавлена кастомная страница, для обработки 404 ошибки.
11. Реализован HOC `withAuth`.
12. Также было создано несколько пользовательских
    хуков:  `useAPi`, `useFavoriteData`, `useFilterChange`, `useHeaderState`.
13. Добавлен скелетон для карточек.
14. Реализованы приватные роуты для */history*,  */favorites*.
15. Формы были созданы с помощью **React Hook Form**. Валидация была реализовано с помощью **yup**.
16. Для запросов к API использовался **Redux Thunk**.

