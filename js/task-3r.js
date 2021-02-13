import users from './users.js';

// // Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) => {
// return users.filter(user => user.gender === gender).map(({name}) => name)
//   // твой код
// };
//** */ решение с редюсом **//
const getUsersWithGender = (users, gender) => {
  return users.reduce((acc, user) => {
    if (user.gender === gender) {
      acc.push(user.name);
    }
    return acc;
  }, []);
};



console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
