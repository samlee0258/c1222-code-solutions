/* exported capitalizeWord */
/*
  - create a function named capitalizeWord with one parameter "word"
  - first get the string and lowercase all the characters in the string
  - then uppercase just the first character of the string
  - if "JavaScript" only the "J" and "S" should be uppercased
  - return the string with the right characters capitalized
*/

function capitalizeWord(word) {
  var arr = [];
  word = word.toLowerCase();
  if (word === 'JavaScript') {
    arr.push(word.charAt(0).toUpperCase() + word.slice(1, 3));
    arr.push(word.charAt(4).toUpperCase() + word.slice(5, 9));
    return arr;
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase();
  }
}
