/* exported addSuffixToAll */
/*
  - make a function with two parameters within its parenthesis the words and suffix
  - assign an empty array to a new variable
  - make a for loop to loop through the parameter array filled with strings
    - at each index of the array, combine each individual string at the index number with the suffix
    - push the strings with their new suffix into the output array
  - return the output array
*/

function addSuffixToAll(words, suffix) {
  var addSuffixArr = [];
  for (var i = 0; i < words.length; i++) {
    addSuffixArr.push(words[i] + suffix);
  }
  return addSuffixArr;
}
