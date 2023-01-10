/* exported lastChars */
/*
  - create a function named lastChars with two parameters "length" and "string"
  - create a variable named reverseArr and assign it to an empty array
  - create a variable named outputArr and assign it to an empty array
  - create a for loop to loop through the string
    - loop the characters from the string backwards
      - push the characters into the reverseArr
  - using the length parameter remove the characters in the reverseArr using splice() method
  - create a for loop to loop through the reversedArr with the removed characters
    - loop the characters from the reversedArr backwards
    - push the index at reverseArr into the outputArr
  - concatenate the characters in the outputArr into a string with join() method
  - return string
*/

function lastChars(length, string) {
  var reverseArr = [];
  var outputArr = [];
  for (var i = string.length - 1; i >= 0; i--) {
    reverseArr.push(string[i]);
  }
  reverseArr.splice(length);
  for (var index = reverseArr.length - 1; index >= 0; index--) {
    outputArr.push(reverseArr[index]);
  }
  return outputArr.join('');
}
