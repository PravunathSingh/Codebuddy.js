// level 1

/* 1. Convert [1, 2, 3] to [2, 3, 4] using one line of code.
Output should be [2, 3, 4] */

const arr = [1, 2, 3];
const result = arr.map((item) => item * 2);
console.log(result);

/* 2. Calculate total of all the numbers in array [1, 2, 3] using one line of code.
Output should be a number: 6 */

const arr1 = arr;
const sum = arr1.reduce(
  (prevValue, currentValue) => prevValue + currentValue,
  0
);
console.log(sum);

/* 3. Print all the properties of the object along with value {name: 'Elie', rank: 'Pro'}.
Output should be a string: "name: Elie, rank: Pro" */

const obj = {
  name: 'Elie',
  rank: 'Pro',
};

console.log(`name: ${obj.name}, rank: ${obj.rank}`);
