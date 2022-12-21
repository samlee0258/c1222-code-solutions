/* exported getIndexes */
/*
  - create function that holds array as the parameter
  - within the function code block make a variable and
  assign it to an empty array
  - write a for loop to loop through each index in the array for the
  argument in the called function getIndexes
  - take out the each individual index from the loop and push into the
  new array
  -return the new array with the indexes out of the function
*/

function getIndexes(array) {
  var arrIndex = [];
  for (var i = 0; i < array.length; i++) {
    arrIndex.push(i);
  }
  return arrIndex;
}
