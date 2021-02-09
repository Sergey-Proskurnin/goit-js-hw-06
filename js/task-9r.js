import users from './users.js';

// Задание 9
// Массив имен (поле name) людей, отсортированных
//  в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
    return [...users].sort((a, b) => a.friends.length - b.friends.length).map(({name}) => name)
  // твой код
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head',
//  'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]