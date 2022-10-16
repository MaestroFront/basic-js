const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(x) {
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
      if (!x[i][j] === true) {
        x[i][j] = 0;
      }
    }
  };


  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
      if (x[i][j] === true) {
        if (typeof x[i - 1] !== 'undefined' && typeof x[i - 1][j - 1] === 'number') {
          x[i - 1][j - 1]++;
        };
        if (typeof x[i - 1] !== 'undefined' && typeof x[i - 1][j - 1] === 'number') {
          x[i - 1][j]++;
        };
        if (typeof x[i - 1] !== 'undefined' && typeof x[i - 1][j + 1] === 'number') {
          x[i - 1][j + 1]++;
        };
        if (typeof x[i][j + 1] !== 'undefined' && typeof x[i][j + 1] === 'number') {
          x[i][j + 1]++;
        };
        if (typeof x[i + 1][j + 1] !== 'undefined' && typeof x[i + 1][j + 1] === 'number') {
          x[i + 1][j + 1]++;
        };
        if (typeof x[i + 1][j] !== 'undefined' && typeof x[i + 1][j] === 'number') {
          x[i + 1][j]++;
        };
        if (typeof x[i + 1][j - 1] !== 'undefined' && typeof x[i + 1][j - 1] === 'number') {
          x[i + 1][j - 1]++;
        };
        if (typeof x[i][j - 1] !== 'undefined' && typeof x[i][j - 1] === 'number') {
          x[i][j - 1]++;
        };
      }
    }
  };

  console.log(x[0]);
  console.log(x[1]);
  console.log(x[2]);
  return x;
};

console.log(
  minesweeper([
    [false, false, false],
    [false, true, false],
    [false, false, false],
  ]),
  [
    [1, 2, 1],
    [2, 1, 1],
    [1, 1, 1],
  ],
);

// console.log(
//   minesweeper([
//     [false, false, false],
//     [false, false, false],
//   ]),
//   [
//     [0, 0, 0],
//     [0, 0, 0],
//   ],
// );

module.exports = {
  minesweeper
};


// let a = [1, 2, 3, 4, 5];
// console.log(typeof(a[-1]) === 'undefined')