import users from './users.js';
// Задание 10
// Получить массив всех умений всех пользователей
//  (поле skills), при этом не должно быть повторяющихся
//   умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
    const arraySkills = [...users].flatMap(({skills}) => skills)
                        .filter((skill, index, array) => array.indexOf(skill) === index)
                        .sort((a, b) => a.localeCompare(b))
    return arraySkills

  // твой код

};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa',
//  'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit',
//   'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]