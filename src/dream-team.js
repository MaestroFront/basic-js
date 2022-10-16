const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members, result = '') {
  if (Array.isArray(members)) {
    members = members.map(item => typeof item === 'string' ? item.split('').filter(item => item !== ' ').join() : item);
    members.map(item => typeof item === 'string' ? result += item[0] : item);
    return result.split('').map(item => item.toUpperCase()).sort().join(''); 
  } else {
    return false;
  }
};

module.exports = {
  createDreamTeam
};
