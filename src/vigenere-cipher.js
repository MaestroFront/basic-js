const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {

  constructor(boolean) {
    this.boolean = boolean;
  }

  encrypt(message, key) {
    if (!message || !key) throw Error('Incorrect arguments!');

    const alphabet = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G',
      'H', 'I', 'J', 'K', 'L', 'M', 'N',
      'O', 'P', 'Q', 'R', 'S', 'T', 'U',
      'V', 'W', 'X', 'Y', 'Z'
    ];

    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');

    if (message.length >= key.length) {
      let i = 0;
      while (message.length !== key.length) {
        key.push(key[i]);
        i++;
      }
    };

    for (let i = 0; i < message.length; i++) {
      if (!alphabet.includes(message[i])) {
        key.splice(i, 0, message[i]);
      };
    };

    for (let i = 0; i < key.length; i++) {
      if (alphabet.includes(key[i])) {
        key[i] = alphabet[(alphabet.indexOf(message[i]) + alphabet.indexOf(key[i])) % 26]
      };
    };

    if (key.length > message.length) {
      while (key.length !== message.length) {
        key.pop();
      }
    }

    if (this.boolean || typeof this.boolean === 'undefined') {
      return key.join('');
    } else {
      return key.reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {

    if (!encryptedMessage || !key) throw Error('Incorrect arguments!');

    const alphabet = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G',
      'H', 'I', 'J', 'K', 'L', 'M', 'N',
      'O', 'P', 'Q', 'R', 'S', 'T', 'U',
      'V', 'W', 'X', 'Y', 'Z'
    ];

    encryptedMessage = encryptedMessage.toUpperCase().split('');
    key = key.toUpperCase().split('');

    if (encryptedMessage.length >= key.length) {
      let i = 0;
      while (encryptedMessage.length !== key.length) {
        key.push(key[i]);
        i++;
      }
    };

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!alphabet.includes(encryptedMessage[i])) {
        key.splice(i, 0, encryptedMessage[i]);
      };
    };

    for (let i = 0; i < key.length; i++) {
      if (alphabet.includes(key[i])) {
        key[i] = alphabet.indexOf(encryptedMessage[i]) - alphabet.indexOf(key[i]);
        key[i] < 0 ? key[i] += 26 : key;
        key[i] = alphabet[key[i]];
      };
    };

    if (key.length > encryptedMessage.length) {
      while (key.length !== encryptedMessage.length) {
        key.pop();
      }
    }

    if (this.boolean || typeof this.boolean === 'undefined') {
      return key.join('');
    } else {
      return key.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};