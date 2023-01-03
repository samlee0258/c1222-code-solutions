/* exported numVowels */
/*
  - create a function named numVowels with one parameter named "string"
  - create a variable vowels assigned an array of vowels
  - create a variable vowelCount assigned the number 0
  - create a for loop to loop through the string
    - if the character at the string index is a vowel
      - increase the vowelCount by 1
  - return vowelCount
*/

function numVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelCount = 0;
  var eachLetter = string.split('');
  for (var i = 0; i < eachLetter.length; i++) {
    if (eachLetter[i] === vowels) {
      vowelCount++;
    }
  }
  return vowelCount;
}
