/* exported toObject */
/*
  - define a function named toObject with one parameter "keyValuePair"
  -
*/

function toObject(keyValuePair) {
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  var object = {};
  object.key = key;
  object.value = value;
  // for (var key in keyValuePair) {
  //   keys.push(key);
  //   values.push(keyValuePair[key]);
  // }
  return object;
}
