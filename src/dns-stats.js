const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains, object = {}) {
  if (domains.length === 0) return {};
  let arr = domains;
  domains = domains.map(item => item.split('.').reverse());

  domains.map(item => {
    for (let i = 0; i < item.length; i++) {
      item[i] = '.' + item[i];
    }
  });

  domains = domains.sort().map(item => item.join(''));

  domains.forEach(item => object[item] = 0);

  Object.keys(object).forEach(item => {
    for (let i = 0; i < domains.length; i++) {
      domains[i].includes(item) ? object[item]++ : object[item];
    }
  });

  domains = domains.map(item => item.split('.').filter(item => item !== '').map(item => '.' + item));

  object[domains[0][0]] = arr.length;

  return object;
}

module.exports = {
  getDNSStats
};

console.log(getDNSStats(domains = ['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']));
console.log(getDNSStats(domains = []));