/* exported reverseWord */
/*
  - define a function named reverseWord with one parameter "word"
  - create a new variable assigned to an empty string
  - write a for loop to loop through the string starting from the end going down
  each character
    - get each character from the for loop and concatenate with the empty string
  - return the output string
*/

function reverseWord(word) {
  var reversedStr = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reversedStr += word[i];
  }
  return reversedStr;
}
