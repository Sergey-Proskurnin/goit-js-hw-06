const numbers = [1, 2, 1, 2, 3, 5];

const countingRepetitions = numbers => {
  return numbers.reduce(
    (accum, num) => ({
      ...accum,
      [num]: accum[num] ? accum[num] + 1 : 1,
    }),
    {},
  );
};

console.log(countingRepetitions(numbers));

// Превратить его в объект с подсчетом повторов
// {
//   1: 2,
//   2: 2,
//   3: 1,
//   5: 1
// }er
