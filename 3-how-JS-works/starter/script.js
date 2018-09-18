///////////////////////////
// Execution context in detail (3.38)

/*
1. Creation phase
-- creation of the variable object (VO)
-- creation of the scope chain
-- determine value of the 'this' variable

2. Execution phase
the code of the function that generated the current execution context is run line by line

*/





///////////////////////////////////////
// Lecture: Hoisting


//functions
/*
calculateAge(1965);

//function declarations
function calculateAge(year) {
    console.log(2016- year);     
}



//retirement(1965);


//function express
var retirement = function(year) {
    console.log(65 - (2016-year));
}

*/
//variables


//console.log(age); // this results is undefined -- javascript knows that it is a variable, but it is undefined
/*
var age = 23;
console.log(age);


function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);

*/




///////////////////////////////////////
// Lecture: Scoping

// scoping: where can we access a variable or function.

// each function creates a scope (where it's variables are accessible)

//lexical scoping: a function that is lexically wihtin another function gets access to the scope of the outer function


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain
/*

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
        
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    //this function can access variables, d and a
    console.log (a + d);
    //var d = 'John';
    //console.log(a + b + c + d);
}


*/

///////////////////////////////////////
// Lecture: The this keyword

// each execution context gets the 'this' variable.
// in a regular function call, this points to the global object

// in a regular method, the 'this' variable points to the object that is calling the method



//console.log(this);
/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
*/
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function () {
        console.log(this);
        console.log(2016 - this.yearOfBirth)
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();           
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
    
}
//borrow John's method to use on Mike

mike.calculateAge = john.calculateAge;
mike.calculateAge();

*/
