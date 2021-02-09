import users from './users.js';
 
// console.log(users);

// Задание 1
// Получить массив имен всех пользователей (поле name).

const getUserNames = users => {
    return users.map(({name}) => name)
  // твой код
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez',
// 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]