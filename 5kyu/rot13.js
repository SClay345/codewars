//5 Kyu
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".



// My Solution

function rot13(message){
    const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM'  // store alphabet +13 in both lower case and upper case so it doesnt cross letter casing bounds
    return message.replace(/[a-z]/gi, letter => alphabet[alphabet.indexOf(letter )+13] ) // simple replace letter with the letter 13 index places later in the alphabet value
  }