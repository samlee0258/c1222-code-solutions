/* exported truncate */
/*
  - create a function named truncate with with two parameter "length" and "string"
  - cut the string at the length of the number using slice() method
  - concatenate the cut string with an ellipsis
  - return shortened string with ellipsis
*/

function truncate(length, string) {
  return string.slice(0, length) + '...';
}
