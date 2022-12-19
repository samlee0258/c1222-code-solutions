/* exported capitalize */
/*
  - define a function named capitalize with one parameter "word"
  - get the first character of the string and uppercase it by using the charAt()
  method and the toUpperCase() method
  - get the remaining characters using the slice() method and lowercase everything
  with the toLowerCase() method
  - concatenate the uppercase letter with the remaining lowercase letters
  - return the output
*/

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase();
}
