/* exported includes */
/*

*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    } else if (array[i] !== value) {
      return false;
    }
  }
}
