/******************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher'
console.log (job);

// Variables naming rules
var _3years = 3;
var johnmark = 'John and Mark';
var if = 23;
*/

/*******************************
*Variable mutation and type coercion



var firstName = 'John';
var age = 28;

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried; 
job = 'teacher'
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' +isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver'

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' +isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

*/

/********************************
* Basic Operators



var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;



//Math operators
yearJohn = now - ageJohn; 
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


//Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder)

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/



/*******************************
* Operator Precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;


//Multiple Operators
var isFullAge = now - yearJohn >= fullAge; //true

// precedence table: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence 
console.log(isFullAge);


//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple Assignments

var x, y;
x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 //26
console.log(x, y);

// More operators

x *= 2;
console.log(x);

x+= 10;
console.log(x);

x--;
console.log(x);
*/

/************************************
CODING CHALLENGE 1
*/

/*
var markMass, johnMass, markHeight, johnHeight;

markMass = 80; //kg
johnMass = 88; //kg

markHeight = 1.8; //meters
johnHeight = 1.7; //meters

var markBMI, johnBMI;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

console.log('Mark\'s BMI is ' + markBMI, 'John\'s BMI is ' + johnBMI);

var markGreaterBMI

markGreaterBMI = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s?', markGreaterBMI);
*/

/***********************************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon :)')
}


var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + 'will hopefully marry soon :)');
}


var markMass, johnMass, markHeight, johnHeight;

markMass = 180; //kg
johnMass = 88; //kg

markHeight = 1.8; //meters
johnHeight = 1.7; //meters

var markBMI, johnBMI;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

console.log('Mark\'s BMI is ' + markBMI, 'John\'s BMI is ' + johnBMI);

if (markBMI > johnBMI){
    console.log('Mark\'s BMI is greater than John\'s.');
} else {
    console.log('John\'s BMI is greater than Mark\'s.');
}

//var markGreaterBMI

//markGreaterBMI = markBMI > johnBMI;

//console.log('Is Mark\'s BMI higher than John\'s?', markGreaterBMI);
*/

/*************************************************
* Boolean Logic
*/
/*
var firstName = 'John';
var age = 26;

if (age < 13){
    console.log(firstName + ' is a boy');
} else if ( age >= 13 && age < 20 ) {//between 13 and 20 = age >= 13 AND age <20
    console.log(firstName + ' is a teenager');
}
else if (age >= 20 && age < 30){
    console.log (firstName + ' is a young man');
}

else {
    console.log(firstName + ' is a man');

}
*/

/***************************************
* The Ternary Operator and Switch Statements
*/
/*
var firstName = 'John';
var age = 20;

//Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/

/* if (age >= 18 ){
    var drink = 'beer';
    console.log(drink);
} else {
    var drink = 'juice';
    console.log(drink);
}
*/

// Switch Statment
/*
var job = 'instructor';
 switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + 'designs beautiful websites');
        break;
    default:
        console.log (firstName + ' does something else');
}
*/

/*
var firstName = 'John';
var age = 17;

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log (firstName + ' is a young man');
        break;
    default:
        console.log (firstName + ' is a man');    
}
    
*/



/*****************************************
* Truthy and Falsy values and equality operators
*/

//falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values

/*
var height;

height = 23;

if (height || height === 0){
    console.log('The Variable is Defined');
} else {
    console.log('Variable has NOT been defined');
}

//Equality Operators
if (height == '23'){
    console.log('The == operator does type coercion!');
}

*/

/****************************************
* CODING CHALLENGE 2
*/


//John's Scores 89, 120, 103
//Mike's Scores 116, 94, 123
//Mary's Scores 97, 134, 105


// Average team score
/*
var johnScore1, johnScore2, johnScore3;
var mikeScore1, mikeScore2, mikeScore3;
var maryScore1, maryScore2, maryScore3;

johnScore1 = 89;
johnScore2 = 120;
johnScore3 = 103;

mikeScore1 = 116;
mikeScore2 = 94;
mikeScore3 = 123;

var averageJohn = (johnScore1 + johnScore2 + johnScore3)/3;

var averageMike = (mikeScore1 + mikeScore2 + mikeScore3)/3

switch (true) {
    case averageJohn > averageMike:
        console.log('John has a higher average than Mike. His average is ' + averageJohn + ' Mike\'s average is ' + averageMike);
        break;
    case averageMike > averageJohn:
        console.log('Mike has a higher average than John. His average is ' + averageMike + ' John\'s average is ' + averageJohn);
        break;
    case averageMike === averageJohn:
        console.log ('It\'s a draw' + averageJohn + ' vsm' + averageMike);
        break;
}

maryScore1 = 97;
maryScore2 = 134;
maryScore3 = 105;

var averageMary = (maryScore1 + maryScore2 + maryScore3)/3;

switch (true) {
    case averageMary > (averageJohn && averageMike):
        console.log('Mary is the winner. Her average is ' + averageMary + '. John\'s average: ' + averageJohn + '. Mike\'s average: ' + averageMike);
        break;        
    case averageMike > (averageJohn && averageMary):
        console.log('Mike is the winner. His average is ' + averageMike + '. John\'s average: ' + averageJohn + '. Mary\'s average: ' + averageMary);
        break;
    case averageJohn > (averageMary && averageMike):
        console.log ('John is the winner. His average is ' + averageJohn + '. Mike\'s Average: ' + averageMike + '. Mary\'s average: ' + averageMary);
        break;
   default: 
        console.log ('There was a draw among the winners. John\'s average: ' + averageJohn + '. Mike\'s average: ' + averageMike + '. Mary\'s average: ' + averageMary);   
}
*/

/**********************************
* Functions
*/

/*
function calculateAge(birthYear){
    return 2018 - birthYear;
}


var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);


function yearUntilRetirement(year, firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearUntilRetirement(1990, 'John');
yearUntilRetirement(1948, 'Mike');
yearUntilRetirement(1969, 'Jane');

*/

/***************************************
* Function Statements and Expressions
*/

//function declaration
//function whatDoYouDO (job, firstname){}



// function expression
/*
var whatDoYouDo = function(job, firstName) {
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does seomthing else';
    }
}

// expressions always produce a value!
// statements just produce actions 

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/


/**************************************
* Arrays
*/

/*
//Initialize new array
var names = ['John', 'Mark','Jane'];
var years = new Array(1990,1969,1948);

console.log(names);
console.log(names.length);
console.log(names[0]);



//Mutate array data
names[1] = 'Ben';
console.log(names);

names[5] = 'Mary';
console.log(names);

//Add Sal to the end

names[names.length] = 'Sal';
console.log(names);

//different data types

var john = ['John', 'Smith', 1990, 'designer', false];

//add to the end of the array
john.push('blue');

//adds to the beginning of an array
john.unshift('Mr.');

//removes the element from the end of the array
john.pop();
john.pop();

//remove first element
john.shift();


//defines which position the thing appears in the array
john.indexOf(1990);
//if it is not in the array, it will return a -1
// used commonly to test if something is IN an array. See the example below


console.log(john.indexOf(1990));
//tests if designer is in the array using a ternary statement
//assigned to a variable in order to be logged to the console


var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';

console.log(isDesigner);


*/

/***********************
* Coding Challenge 3
*/


// Bills were $124, $48, $268

// Tips 20% when under $50
// Tips 15% when between $50-$200
// Tips 10% when bill is more than $200


// two arrays: one with all three tips, one with all three paid amounts
/*
function fairTip (billTotal){
    if (billTotal < 50) {
        //console.log('20% tip');
        return (.2* billTotal);
    }
    else if (billTotal >= 50 && billTotal <= 200) {
        //console.log('15% tip');
        return (.15* billTotal);
    }
    else if (billTotal >200){
        //console.log('10% tip');
        return (.10* billTotal);
    }
}

function totalBill (bill){
    var totalMealCost = bill + fairTip(bill);
    return totalMealCost;
}

var bills = [124, 48, 268];
var billTips = [fairTip(bills[0]), fairTip(bills[1]), fairTip(bills[2]), ];
var billTotals = [totalBill(bills[0]), totalBill(bills[1]), totalBill(bills[2])];

console.log('The three tips that need to be paid are: '+ billTips);

console.log('The total each bill is: '+ billTotals);
*/

/**************************
* Objects and properties
*/

// In arrays order matters
// In objects order does not matter


//object literal is a container to fill with variables called properties 
/*

//Object Literal
var john = {
    firstName: 'John', //key-value pair. firtName is a property of the John object
    lastName: 'Smith',
    birthYear: 1990, 
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
};


console.log(john.firstName); //different ways to retrieve elements from an array
console.log(john['lastName']); //lastName is a string in this case

//QUESTION: why do you have to pass in key as a string rather than just a variable name?

var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//New Object Syntax

var jane = new Object(); 
//QUESTION: so to create a new object you use paranthesese but then when actually building the object you use curly brackets?

jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith'

console.log(jane);
*/

/*****************************************
* Objects and Methods
*/


//you can attach functions to objects -- these functions are called functions
/* 
var john = {
    firstName: 'John', //key-value pair. firtName is a property of the John object
    lastName: 'Smith',
    birthYear: 1992, 
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age = 2018 - this.birthYear
    }
};


//NOTE FOR FUTURE ME: 'this'keyword is going to be very important. 

//you can use 'this' to refer to the current object that you're in 

//console.log(john.calcAge());

//if we wanted to store the result of the object in the object

//john.age = age john.calcAge();

//console.log(john.calcAge());

john.calcAge(); 
console.log(john);

*/

/********************************
* CODING CHALLENGE 4
*/ 

// create object for Mark and John with full name, mass, height, 
// add a method to each object to calculate BMI. Save the BMI to the object.
//Log to the console who has the highest BMI 

//BMI calculated with BMI = mass / (height * height)

/*

var john = {
    fullName: 'John Alexander',
    mass: 88,
    height: 1.7, 
    calcBMI: function() {
        this.result = this.mass/(this.height * this.height)
        return this.result //QUESTION: why is this necessary? this came from the solution
    }
    
}

var mark = {
    fullName: 'Mark Herring',
    mass: 88,
    height: 1.5, 
    calcBMI: function() {
        this.result = this.mass/(this.height * this.height)
        return this.result //why is this necessary? this came from the solution
    }
    
}

//my version (not using the return method originally)


john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if (john.result > mark.result){
    console.log(john.fullName + '\'s higher BMI is: ' + john.result);
} else if (mark.result > john.result){
    console.log (mark.fullName + '\'s higher BMI is: ' + mark.result);
} else {
    console.log(john.fullName + ' and ' + mark.fullName + ' have the same BMI!');
}

//instructor's version (using the return method)
    

if (john.calcBMI() > mark.calcBMI()){
    console.log(john.fullName + '\'s higher BMI is: ' + john.result);
} else if (mark.result > john.result){
    console.log (mark.fullName + '\'s higher BMI is: ' + mark.result);
} else {
    console.log(john.fullName + ' and ' + mark.fullName + ' have the same BMI!');
}
*/


/************************
* Loops and Iterations

*/ 

// for loop has 3 parts
// * initial value of the counter
// * the condition that is evaluated
// * the counter update

//for (var i = 0; i <10; i++ ){
//    console.log(i);
//}

// i = 0, 0 < 10 true, log i to console, the counter is updated (i++)
// i = 1, 1, 10 true, log i to console, i++
//.....
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 FALSE, log i to console, i++

/*

for (var i = 1; i <= 20; i += 2 ){
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];
console.log(john);

for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}


//while loop
var i =0
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/

//continue and break statements



// for loop that just searches for strings in the john array. To illustrate "continue".
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue; //usually if has curly braces but since it's on one line, it's fine.
    console.log(john[i]);
}

// to illustrate "break"
var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break; //usually if has curly braces but since it's on one line, it's fine.
    console.log(john[i]);
}


for (var i = john.length - 1; i >= 0 ; i--) {
    console.log(john[i]);
}
*/

/**************************
*CODING CHALLENGE 5
*/

/*
John's bills:
- 124, 48, 268, 180, 42
- John tips 20% when the bill is less than $50
- John tips 15 if the bill is between 50-200
- John tips 10 if the bill is more than 200

1. create an object with an array for bill values
2. add a method to calculate the tip
3. this method should loop over all of the paid amounts 
4. output 
-- a new array containing all of the tips
-- an array contianing the final paid amounts 
*/

//My Solution

var tips = []
var totalWithTip = []
var johnsBills = {
    billTotals: [124, 48, 268, 180, 42],
    calcTip: function () {
        for (var i = 0 ;i < this.billTotals.length; i++) {
            
            if (this.billTotals[i] < 50) {
                //20% tip
                tips.push(calculatedTip = this.billTotals[i]*.2);
                totalWithTip.push(calculatedTip = this.billTotals[i]*1.2);
            } 
            
            else if (this.billTotals[i] >= 50 && this.billTotals[i] <= 200) {
                //15% tip
                tips.push(this.billTotals[i]*.15);
                totalWithTip.push(calculatedTip = this.billTotals[i]*1.15);
            }
            else if (this.billTotals[i] >200){
                //10% tip
                tips.push(this.billTotals[i]*.1);
                totalWithTip.push(calculatedTip = this.billTotals[i]*1.1);
            }
            
           
}
}
}

johnsBills.calcTip();
console.log('Johns total tips are: ' + tips);
console.log('Johns total bills are: ' + totalWithTip);


//Mark's totals: 77, 375, 110, 45
// Mark tips 20% when the bill is less than 100
// 10% when the bill is between 100-300
// 25% if the tip is more than 300

var markstips = []
var markstotalWithTip = []
var marksBills = {
    billTotals: [77, 475, 110, 45],
    calcTip: function () {
        for (var i = 0 ;i < this.billTotals.length; i++) {
            
            if (this.billTotals[i] < 100) {
                //20% tip
                markstips.push(calculatedTip = this.billTotals[i]*.2);
                markstotalWithTip.push(calculatedTip = this.billTotals[i]*1.2);
            } 
            
            else if (this.billTotals[i] >= 100 && this.billTotals[i] <= 300) {
                //10% tip
                markstips.push(this.billTotals[i]*.10);
                markstotalWithTip.push(calculatedTip = this.billTotals[i]*1.10);
            }
            else if (this.billTotals[i] >300){
                //25% tip
                markstips.push(this.billTotals[i]*.25);
                markstotalWithTip.push(calculatedTip = this.billTotals[i]*1.25);
            }
            
           
}
}
}
marksBills.calcTip();
console.log('Marks total tips are: ' + markstips);
console.log('Marks total bills are: ' + markstotalWithTip);


function calcAverage (arrayOfTips) {
    var total = 0;
    for (var i = 0; i < arrayOfTips.length; i++ ) {
        total = total + arrayOfTips[i];
    }
    return total / arrayOfTips.length;
}

var marksaverage =  calcAverage(markstips);
var johnsaverage = calcAverage(tips);


console.log(marksaverage, johnsaverage);


if (johnsaverage > marksaverage){
    console.log ('Johns higher average tip is: ' + johnsaverage);
} else if (marksaverage > johnsaverage) {
    console.log('Marks higher average tip is: ' + marksaverage);
} else {
    console.log( 'they have the same average tip: ' + marksaverage);
}

// His Solution for part 1
/*

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++)
            {
                //Determine percentage based on tipping rules
                var percentage;
                var bill = this.bills[i];
                
                if (bill < 50) {
                    percentage = .2;
                } else if (bill >= 50 && bill <200) {
                    percentage = .15;
                } else {
                    percentage = .1;
                }
                
                //Add results to the corresponding arrays
                this.tips[i] = bill * percentage;
                this.finalValues[i] = bill + bill * percentage;
            }
    }
}

john.calcTips();
console.log(john);

//His solution for Part 2
var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++)
            {
                //Determine percentage based on tipping rules
                var percentage;
                var bill = this.bills[i];
                
                if (bill < 100) {
                    percentage = .2;
                } else if (bill >= 100 && bill < 300) {
                    percentage = .10;
                } else {
                    percentage = .25;
                }
                
                //Add results to the corresponding arrays
                this.tips[i] = bill * percentage;
                this.finalValues[i] = bill + bill * percentage;
            }
    }
}


mark.calcTips();
console.log(mark);



function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
        }
    return sum / tips.length;

}


//Do the calculations
john.calcTips();
mark.calcTips();
console.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName+ '\'s family pays higher tips with an average of $' + mark.average);
}
*/

// DONE WITH FIRST JAVASCRIPT INTRODUCTION


            
            



            
            
































