const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */


function getSeason(date) {

  const winter = ['Dec', 'Jan', 'Feb'];
  const spring = ['Mar', 'Apr', 'May'];
  const summer = ['Jun', 'Jul', 'Aug'];
  const autumn = ['Sep', 'Oct', 'Nov'];

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  };

  try {
    date.getTime()
  } catch (e) {
    throw new Error('Invalid date!');
  }

  let arr = String(date).split(' ');
  if (winter.includes(arr[1])) {
    return 'winter';
  } else if (spring.includes(arr[1])) {
    return 'spring';
  } else if (summer.includes(arr[1])) {
    return 'summer';
  } else if (autumn.includes(arr[1])) {
    return 'autumn';
  };
};


module.exports = {
  getSeason
};
