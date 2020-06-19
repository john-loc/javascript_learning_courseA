// Variables and data types.

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// // variable naming rules
// var $3 = 3;
// console.log($3)

/******** Variable mutation and type coercion.
 *
 */
// type coercion
// var firstName = 'John';
// var age = 28;
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age +  ' year old ' + job + '. Is he married? ' + isMarried);

// variable mutation
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age +  ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);

/***************
 * Basic operators
 */

// Math operators
//  var year, yearJohn, yearMark;
//  now = 2018
//  ageJohn = 28;
//  ageMark = 33;

//  yearJohn = now - 28;
//  yearMark = now - 33;
//  console.log(yearJohn);
//  console.log(now + 2);
//  console.log(now * 2);
//  console.log(now / 10);

//  // Logical operators
//  var johnOlder = ageJohn > ageMark;
//  console.log(johnOlder);

//  // type of operator
//  console.log(typeof johnOlder);
//  console.log(typeof ageJohn);
//  console.log(typeof 'Mark is Older then John');
//  var x;
//  console.log(typeof x);

/********************
 * Operator precedence
 * codingheroes.io/resources
 */

//  var now = 2018;
//  var yearJohn = 1989;
//  var fullAge = 18;

//  //multiple operators
//  var isFullAge = now - yearJohn >= fullAge; //true
//  console.log(isFullAge);

//  //Grouping
//  var ageJohn = now - yearJohn;
//  var ageMark = 35;
//  var average = (ageJohn + ageMark) / 2;
//  console.log(average);

//  //Multiple assignments
//  var x, y;
//  x = y = (3 +5) * 4 - 6; // 8*4-6 // 32 -6 // 26
//  console.log(x,y);

//  // 2+4+5 - left to right
//  // assignments operators works from right to left

//  // More operators
//  x *= 2;
//  // x = x * 2; same as
//  console.log(x);
//  x += 10;
//  //x = x + 10; same as
//  console.log(x);
//  x = x + 1;
//  //x += 1; same as
//  //x++; same as

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// assign values to variables for Mark and John's mass and height
// var markMass, markHeight;
// markMass = 100;
// markHeight = 3.1

// var johnMass, johnHeight;
// johnMass = 110;
// johnHeight = 2.7;

// // Calculate Mark and John's BMI's
// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);
// // log the BMIs to console to test
// console.log(markBMI, johnBMI);

// // create a boolean variable - does mark have a higher BMI then John?
// var isMarkBMI = markBMI > johnBMI;
// console.log('Is Mark\'s BMI higher then John\'s BMI? ' + isMarkBMI);

/*****
 * IF / ELSE statements
 */

//  var firstName = 'John';
//  var civilStatus = 'single';
//  if (civilStatus === 'married'){
//      console.log(firstName + ' is married!');
//  } else {
//      console.log(firstName + ' is not married!')
//  }
//  var isMarried = true;
//  if (isMarried) {
//      console.log(firstName + ' is married!');
//  } else {
//      console.log(firstName + ' is not married!')
//  }

// //  assign values to variables for Mark and John's mass and height
// var markMass, markHeight;
// markMass = 300;
// markHeight = 3.1

// var johnMass, johnHeight;
// johnMass = 190;
// johnHeight = 2.7;

// // Calculate Mark and John's BMI's
// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);
// // log the BMIs to console to test
// console.log(markBMI, johnBMI);

// // create a boolean variable - does mark have a higher BMI then John?
// var isMarkBMI = markBMI > johnBMI;
// if (markBMI > johnBMI){
//     console.log('Mark\s BMI is higher then John\s');
// } else {
//     console.log('John\s BMI is higher then Mark\s');
// }

/***
 * Boolean Logic
 *
 */

// AND (&&) => true if ALL are true
// OR (||) => true if ONE is true
// NOT (!) => inverts true/false value

//  var firstName = 'John';
//  var age = 29;

//  if (age < 13) {
//      console.log(firstName + ' is a boy. ');
//  } else if (age >= 13 && age < 20) {//between 13 and 20 = age >= 13 AND < 20
//      console.log(firstName + ' is a teenager. ');
//  } else if (age >= 20 && age < 30) {
//      console.log(firstName + ' is a young man. ');
//  }
//     else {
//      console.log(firstName + ' is a man. ');
//  }

/****
 * Ternary Operator and Switch Statements
 */
// ternary operator
// var firstName = "John";
// var age = 25;
// age >= 30
//   ? console.log(firstName + " drinks beer. ")
//   : console.log(firstName + " Drinks Juice. ");

// var drink = age >= 18 ? "beer" : "juice";
// console.log(drink);

// // same as this:
//  if (age >= 18) {
//      var drink = 'beer';
//  } else {
//      var drink = 'juice';
//  }

// // switch statement
// var age = 20;

// var job = "cop";
// switch (job) {
//   case "teacher":
//     console.log(firstName + " Teaches kids how to code. ");
//     break;
//   case "driver":
//     console.log(firstName + "Driver drives a uber");
//     break;
//   case "designer":
//     console.log(firstName + " Designs awesome websites. ");
//     break;
//   default:
//     console.log(firstName + " does something else. ");
//     break;
// }

// var age = 20;
// var firstName = "John";
// var firstName = "John";
// var age = 20;

// var firstName = 'John';
// var age = 25;
// switch (true) {
//   case age < 13:
//     console.log(firstName + " is a boy. ");
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + " is a teenager. ");
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + " is a young man. ");
//     break;
//   default:
//     console.log(firstName + " is a man. ");
// }

/**
 * Truthy and Falsy values and equality operators 
 * 
 * falsy values: undefined, null, 0, '', NaN
 * 
 * truthy values: NOT falsy values
 */

// var height;
// height = '23';
// if (height || height === 0) {
//   console.log('Variable is defined');

// } else {
//   console.log('Variable has not been defined. ');

// }

// //equality operators
// if (height == '23') {
//   console.log('The == operator does type coercion');
// }

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// assign variables for each team
var johnTeamAVGPTS, mikeTeamAVGPTS, maryTeamAVGPTS;
johnTeamAVGPTS = (89 + 120 + 103) / 3;
mikeTeamAVGPTS = (116 + 94 + 123) / 3;
maryTeamAVGPTS = (97 + 104 + 135) / 3;
  console.log('John\'s Team average is ' + johnTeamAVGPTS + ' points.');
  console.log('Mike\'s Team average is ' + mikeTeamAVGPTS + ' points.');
  console.log('Mary\'s Team average is ' + maryTeamAVGPTS + ' points.');
if (johnTeamAVGPTS > mikeTeamAVGPTS && johnTeamAVGPTS > maryTeamAVGPTS) {
console.log('John\'s Team WINS! with ' + johnTeamAVGPTS + ' average points.');
} else if (mikeTeamAVGPTS > johnTeamAVGPTS && mikeTeamAVGPTS > maryTeamAVGPTS) {
console.log('Mike\'s team WINS! with ' + mikeTeamAVGPTS + ' average points.');
} else if (maryTeamAVGPTS > johnTeamAVGPTS && maryTeamAVGPTS > mikeTeamAVGPTS) {
console.log('Mary\'s team WINS! with ' + maryTeamAVGPTS + ' average points.');
}  else {
console.log('It\'s a TIE!');
}
