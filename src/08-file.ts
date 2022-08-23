#!Arrays
(() => {
  let prices = [10, 15, 20, 25, 28, 30, 42, 'Hi', true];
  prices.push(20);

  let newArray = ['Hi', false];
  newArray.push('Some content');

  let mixed: (number | string | boolean | Object)[] = ['Hi', true];
  mixed.push(200);
  mixed.push({});

  let numbers = [1, 2, 3, 4, 5, 6, 7];
  numbers = numbers.map(item => item * 2);
  console.log(numbers);
})();

