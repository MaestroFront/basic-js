const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options, arrStr = [], arrAddition = []) {

  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (typeof str !== 'string') str = String(str);
  if (typeof options.addition !== 'string') options.addition = String(options.addition);

  if (!options.repeatTimes) {
    arrStr.push(str);
  } else {
    while (options.repeatTimes > 0) {
      arrStr.unshift(str);
      options.repeatTimes--;
    }
  }

  if (!options.additionRepeatTimes) {
    options.addition !== 'undefined' ? arrAddition.push(options.addition) : options.addition;
  } else {
    while (options.additionRepeatTimes > 0) {
      arrAddition.push(options.addition);
      arrAddition.push(options.additionSeparator);
      --options.additionRepeatTimes;
    };
    arrAddition.pop();
  }

  arrStr = arrStr.map(item => item += arrAddition.join(''))

  return arrStr.join(options.separator);
};

//repeatTimes - задает количество повторений str
//separator - это строка, разделяющая повторения str
//addition - дополнительная строка, которая будет добавляться к каждому повторению str
//additionRepeatTimes - количество повторений addition
//additionSeparator - трока, разделяющая повторения addition

module.exports = {
  repeater
};
