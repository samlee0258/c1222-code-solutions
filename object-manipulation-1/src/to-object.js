/* exported toObject */
/*
  - define a function named toObject with one parameter "keyValuePair"
  - create a variable assigned to an empty object
  - create a variable 'key' assigned to the keyValuePair at index 0
  - create a variable 'value' assigned to the keyValuePair at index 1
  - take the key and its value and store into output object
  - return output object
*/

function toObject(keyValuePair) {
  var object = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  object[key] = value;

  return object;
}
