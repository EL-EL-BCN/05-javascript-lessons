// named function
function testExample() {
	var greeting = "Hi! my name is Elliott";
	console.log(greeting);
}

testExample();


//named function
function testExample2(a) {
	var greeting2 = "Hi! my name is " +a;
	return greeting2;
}
console.log(testExample2("Nick"));

//named function
function testExample3(a) {
	var greeting3 = "hi! my name is " +a;
	return greeting3;
}
var name = "John Smith";
console.log(testExample3(name));

//Anonymous function
var testExample4 = function() {
	var greeting4 = "hi! my name is Jack";
	return greeting4;
}
console.log(testExample4());

//Anonymous function
var testExample5 = function(a) {
	var greeting5 = "hi! my name is "+a;
	return greeting5;
}
var name = "John Doe";
console.log(testExample5(name));

//immediately invoked functional Expression
(function() {
	var greeting6 = "hi my name is Jacob";
	console.log(greeting6);
}())


