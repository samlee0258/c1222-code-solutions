/* exported getStudentNames */
/*
  - define a new function with one parameter students which is an array of objects
  - in the function code block define a new variable, which is assigned an empty array
  that is going to hold the names of the students
  - make a for loop over the array holding objects
    - inside the for loop, retrieve the value of the name property from the current object
    - then push the values into the empty array with the push method
  - return the values out of the function
*/

function getStudentNames(students) {
  var studentNames = [];
  for (var i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);
  }
  return studentNames;
}
