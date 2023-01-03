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
    var java = word.charAt(0).toUpperCase() + word.slice(1, 3).toLowerCase();
    var script = word.charAt(0).toUpperCase() + word.slice(1, 5).toLowerCase();
    return java + script;
  }
}
