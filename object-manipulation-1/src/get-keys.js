/* exported getKeys */
/*
  - define a function named getKeys with one parameter "object"
  - create a variable assigned to an empty array
  - create a for in loop to loop through the objects
    - push the key into the output array
  - return output array
*/

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
