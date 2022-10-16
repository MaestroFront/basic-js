const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str, unique = []) {

  str = str.split('');

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      unique.push(str[i]);
    }
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i - 1] && str[i] !== str[i + 1]) {
      str[i] = '1';
    }
  };

  str = str.filter(item => item !== '1');

  unique = unique.map(item => {
    for (let i = 0; i < str.length; i++) {
      if (item.split('').includes(str[i])) {
        item = '1' + item;
      }
    }
    return item;
  });

  unique = unique.map(item => item.replace('1111', '4'));
  unique = unique.map(item => item.replace('111', '3'));
  unique = unique.map(item => item.replace('11', '2'));

  return unique.join('');
};

module.exports = {
  encodeLine
};