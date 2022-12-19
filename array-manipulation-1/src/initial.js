/* exported initial */
/*
  - define a function named initial with one parameter "array"
  - create a new variable assigned to an empty array
  - create a for loop to loop through each index in an array
    - create a conditional statement
      - if the index is not strictly equal to the last index number which was retrieved
      from the result of the expression array.length subtracted by 1
        - push into the empty array
  - return the output array
*/

function initial(array) {
  var initialArr = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      initialArr.push(array[i]);
    }
  }
  return initialArr;
}
