import users from './users.js';

// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.


const calculateTotalBalance = users => {
    return users.reduce((total, {balance}) => {
        return total += balance
    }, 0);
  // твой код
}

console.log(calculateTotalBalance(users)); // 20916