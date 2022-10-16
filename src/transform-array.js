const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr, newArr = [], result = []) {
  const nextPlus = '--double-next';
  const nextMinus = '--discard-next';
  const prevPlus = '--double-prev';
  const prevMinus = '--discard-prev';

  if (Array.isArray(arr) === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  arr.forEach(item => newArr.push(item));

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === nextPlus) {
      result.push(newArr[i + 1]);
    } else if (newArr[i] === prevPlus) {
      result.push(newArr[i - 1]);
    } else if (newArr[i] === nextMinus) {
      newArr[i + 1] = ' ';
    } else {
      result.push(newArr[i]);
    };
  };
  result.map(item => {
    if (item === prevMinus) {
      result[result.indexOf(prevMinus) - 1] = ' ';
    }
  });
  result = result.filter(item => item !== ' ' && item !== prevMinus && item !== undefined);

  return result;
};


module.exports = {
  transform
};