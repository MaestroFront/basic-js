const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(n, speed) {
  let obj = {}
  obj.turns = 2 ** n - 1;
  obj.seconds = Math.floor(obj.turns / (speed / 3600));
  return obj;
};

module.exports = {
  calculateHanoi
};
