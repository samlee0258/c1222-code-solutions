/* exported dropRight */
/*
  - create a function named dropRight with two parameters "array" and "count"
  - cut out the index numbers in the array using the count
  - return the array
*/

function dropRight(array, count) {
  return array.slice(array, array.length - count);
}
