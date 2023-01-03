/* exported ransomCase */
/*
  - create a function named ransomCase  with one parameter "string"
  - create a variable assigned to an empty string
  - create a for loop to loop through the length of the string
    - if the remainder is not equal to 0 then uppercase the index number
    - else lowercase the index number
  - return the output string
*/

function ransomCase(string) {
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      output += string[i].toUpperCase();
    } else {
      output += string[i].toLowerCase();
    }
  }
  return output;
}
