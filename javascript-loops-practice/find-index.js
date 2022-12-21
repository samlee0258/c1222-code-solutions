/* exported findIndex */
/*
 - define a function named findIndex that has two parameters, "array" and "value"
 - make a for loop to loop through each index in the array
    - check the index to see if the value at that index is the value that is
    being searched for
      - if so return the index number where the value is present in the array
  - if not then return -1 indicating that the number is not inside the array
*/

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
