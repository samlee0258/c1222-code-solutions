function ExampleConstructor() {

}
console.log('value of ExampleConstructor:', ExampleConstructor);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor);

var newExampleConstructor = new ExampleConstructor();
console.log('value of newExampleConstructor:', newExampleConstructor);
console.log('typeof newExampleConstructor:', typeof newExampleConstructor);

var valueOfExampleConstructor = newExampleConstructor instanceof ExampleConstructor;
console.log('value of valueOfExampleConstructor:', valueOfExampleConstructor);
