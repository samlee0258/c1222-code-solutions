/* exported getLastChar */
/*
  - define a function named getLastChar with one parameter "string"
  - get the last character of the string by looking at the last index of the string
  using the charAt() method
    - input the full length of the string and subtract that by 1
    - the result of that expression will give you the index number for the last character
  - return output
*/

function getLastChar(string) {
  return string.charAt(string.length - 1);
}
