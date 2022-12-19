/* exported getWords */
/*
  - define a function named getWords with one parameter "string"
  - create a conditional statement
    - if the string is strictly equal to an empty '' return an empty array
    - else return the string seperated from each space and put the seperated words
    in an array using the split() method with the string space argument
*/

function getWords(string) {
  if (string === '') {
    return [];
  } else {
    return string.split(' ');
  }
}
