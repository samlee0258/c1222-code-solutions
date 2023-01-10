/* exported capitalizeWord */
/*
  - create a function named capitalizeWord with one parameter "word"
  - create a variable named outputArr and assign it to an empty array
  - lowercase all the characters in the string
  - if word strictly equals 'javascript'
    - uppercase the character at the 0 index in the string and concatenate it with the lowercased characters
    at index 1 through 4 using the charAt() method and toUpperCase() method to get "J" and slice() method
    to get the string "ava"
    - concatenate "Java" with the uppercase 4th index and concatenate result of that expression with the lowercased
    characters at index 5 through 10 using the charAt() method and toUpperCase() method to get "S" and slice() method
    - push the result of the expression into the output array
    - return the string "JavaScript" using the join() method
  - else get the uppercase character at the index of 0 and concatenate with the characters starting
  at the 1 index
  - return string
*/

function capitalizeWord(word) {
  var outputArr = [];
  word = word.toLowerCase();
  if (word === 'javascript') {
    outputArr.push(word.charAt(0).toUpperCase() + word.slice(1, 4) + word.charAt(4).toUpperCase() + word.slice(5, 10));
    return outputArr.join('');
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
