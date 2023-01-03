/* exported drop */
/*
  - create a function named drop with two parameters "array" and "count"
  - using the slice() method with the argument count it will remove the number of
  elements determined by the count argument
  - return remaining array
*/

function drop(array, count) {
  return array.slice(count);
}
