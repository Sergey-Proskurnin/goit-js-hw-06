import users from './users.js';

// Задание 2
// Получить массив объектов пользователей по цвету глаз
//  (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
return users.filter(({eyeColor}) => (eyeColor === color))
  // твой код
};

console.log(getUsersWithEyeColor(users, 'blue'));
 // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]