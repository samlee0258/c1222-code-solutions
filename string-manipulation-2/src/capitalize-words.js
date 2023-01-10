/* exported capitalizeWords */
/*
  - create a function named capitalizeWords with one parameter "string"
  - lowercase everything in the string using the toLowerCase() method
  - separate the words in a string at the "space" and assign to a variable
  - create a variable assigned to an empty array
  - create a for loop to loop through the string
    - create a variable assigned to the uppercased letter from the word at the index number
    - push the letter plus the lowercased words at the index number into the output array
  - return the output array as a string using the join() method with a "space"
*/

function capitalizeWords(string) {
  string = string.toLowerCase();
  var words = string.split(' ');
  var arr = [];
  for (var i = 0; i < words.length; i++) {
    var letter = words[i].charAt(0).toUpperCase();
    arr.push(letter + words[i].slice(1));
  }
  return arr.join(' ');
}
