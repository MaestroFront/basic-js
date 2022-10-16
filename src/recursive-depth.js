const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {

  calculateDepth(array, newDepth = 1) {
    if (newDepth) {
      this.depth = 1;
      this.curentDepth = 1;
    }
    if (this.curentDepth > this.depth) {
      this.depth = this.curentDepth
    }
    array.forEach(item => {
      if (Array.isArray(item)) {
        this.curentDepth += 1
        this.calculateDepth(item, newDepth = 0);
      }
    });

    this.curentDepth = 1;
    return this.depth;
  }
};

module.exports = {
  DepthCalculator
};