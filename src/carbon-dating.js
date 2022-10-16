const { NotImplementedError } = require('../extensions/index.js');

const ma = 15;
const hlp = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(a) {
  if (typeof(a) === 'string' && +a > 0 && +a < 15) {
    return Math.ceil(Math.log(ma / +a) / (0.693 / hlp));
  } else {
    return false;
  }
};


// ln(modernActivity/sampleActivity) /( 0.693/halflifeperiod);

module.exports = {
  dateSample
};
