/* exported capitalizeWord */
/*
  - create a function named capitalizeWord with one parameter "word"
  - first get the string and lowercase all the characters in the string
  - then uppercase just the first character of the string
  - if "JavaScript" only the "J" and "S" should be uppercased
  - return the string with the right characters capitalized
*/

function capitalizeWord(word) {
  if (word !== 'JavaScript') {
    return word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase();
  } else {
    return word.slice(0, 3) + word.charAt(0).toUpperCase() + word.slice(4, 9) + word.charAt(4).toUpperCase();
  }
}
