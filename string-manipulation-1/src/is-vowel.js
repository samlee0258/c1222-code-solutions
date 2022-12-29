/* exported isVowel */
/*
  - define a function named isVowel with one parameter "character"
  - have all the characters changed to lowercase using the toLowerCase method
  - write a conditional statement to check if is equal to a vowel
    - return true if it is strictly equal
    - return flase if not
*/

function isVowel(char) {
  var lowerCase = char.toLowerCase();
  if (lowerCase === 'a' || lowerCase === 'e' || lowerCase === 'i' || lowerCase === 'o' || lowerCase === 'u') {
    return true;
  } else {
    return false;
  }
}
