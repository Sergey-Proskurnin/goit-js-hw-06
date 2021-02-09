// Задание
// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив
//  книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив
//  книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг
//  отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг
//  отсортированный по убыванию рейтинга.
// Тесты
// Объявлена переменная books.
// Значение переменной books это исходный массив объектов книг.
// Объявлена переменная sortedByAuthorName.
// Значение переменной sortedByAuthorName это массив книг
//  отсортированный по имени автора в алфавитном порядке.
// Объявлена переменная sortedByReversedAuthorName.
// Значение переменной sortedByReversedAuthorName это массив
//  книг отсортированный по имени автора в обратном алфавитном порядке.
// Объявлена переменная sortedByAscendingRating.
// Значение переменной sortedByAscendingRating это массив
//  книг отсортированный по возрастанию рейтинга.
// Объявлена переменная sortedByDescentingRating.
// Значение переменной sortedByDescentingRating это массив
//  книг отсортированный по убыванию рейтинга.
// Для перебора массива books используется метод sort().

const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
  const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
  
  const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));
  
  const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
  
  const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

  console.table(books);
  console.table(sortedByAuthorName);
  console.table(sortedByReversedAuthorName);
  console.table(sortedByAscendingRating);
  console.table(sortedByDescentingRating);