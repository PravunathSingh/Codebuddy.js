// level 1

/* 

Write a function in Javascript to print the following pattern.

      1
    1 2 1
  1 2 3 2 1
1 2 3 4 3 2 1

*/

function printPyramid(rows) {
  let string = '';
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows - i; j++) {
      string = string + ' ';
    }
    for (let j = 1; j <= i; j++) {
      string = string + j;
    }
    for (let j = i - 1; j >= 1; j--) {
      string = string + j;
    }
    string = string + '\n';
  }
  console.log(string);
}
printPyramid(3);
