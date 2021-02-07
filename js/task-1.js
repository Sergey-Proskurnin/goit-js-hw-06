// Задание
// Функция calculateTotalPrice(orderedItems) принимает один параметр
//  orderedItems - массив чисел, и рассчитывает общую сумму его элементов,
//   которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// Тесты
// Объявлена функция calculateTotalPrice(orderedItems).
// Для перебора массива orderedItems использован метод forEach.
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  orderedItems.forEach(function (orderedItem) {
    totalPrice += orderedItem
  })
 
  // Пиши код выше этой строки
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));//138
console.log(calculateTotalPrice([164, 48, 291]));//503
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));//1116