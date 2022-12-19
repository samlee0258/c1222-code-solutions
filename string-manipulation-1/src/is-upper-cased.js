/* exported isUpperCased */
/*
  - define a function named isUpperCased with one parameter "word"
  - write a conditional statement
    - if the word is strictly equal to all uppercased letters, return true
    - else return false
*/

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
