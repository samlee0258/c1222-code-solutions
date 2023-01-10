/* exported numVowels */
/*
  - create a function named numVowels with one parameter named "string"
  - create a variable vowels assigned an array of vowels
  - create a variable vowelCount assigned the number 0
  - create a variable assigned an array with each character of the string
  - create a for loop to loop through the array with the broken up string
    - create a for loop to loop through the vowels array
      - if the character at the eachChar array strictly equals to the vowels index
      - increase vowelCount
  - return vowelCount
*/

function numVowels(string) {
  var vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  var vowelCount = 0;
  var eachChar = string.split('');
  for (var char = 0; char < eachChar.length; char++) {
    for (var index = 0; index < vowels.length; index++) {
      if (eachChar[char] === vowels[index]) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
}
