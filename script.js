// comments in javascript


/* 
multi-line 
comments*/


//Printing to the console
console.log("Hello World");
console.log(1000);

//Variables in javascript

//let - use let if you want to overwrite value
let x; //declaring x
x = 3; // assigning value 3 to it
 //or

//let x = 3;

console.log(x);
x = 2;
console.log(x); // prints 2 as the value of x which was 3 has been overwritten

//const - use const if you don't want to overwrite
// const y = 90000;
// y =8000 
// console.log(y); //prints error since y cannot be overwritten    

//Arithmetic operators

let num1 = 200;
let num2 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2); // exponent operator

//Unary operators
console.log(num1++); //post increment: num1 will be printing 200 then it becomes 201
console.log(num1); // this shows you that num1 increases to 201

console.log(num1--); // post decrement: num1 will be printing 201 then it becomes 200
console.log(num1); // this shows you that num1 decreases to 200

console.log(--num1); // pre decrement: prints 200-1 = 199 to the console straight away
console.log(++num1); // pre increment: prints 199+1 = 200 to the console straight away

//Conditional Operators

//= , assignment oprator 
let z = 8000;

// == , equal to operator - checks only values
console.log(1000 == 1000); // prints true to the console
console.log(1000 == 0); // prints false to the console

// === , strictly equal to operator - checks both value and type
confirm(1000 === "1000"); //prints false to the console

// conditional operators
console.log(10 > 11) // greater than operator  
console.log(11 >= 10) // greater than or equal to operator
console.log(10 < 11) // less than operator
console.log(11 <= 10) // less than or equal to operator

// bitwise operator
// | or 
// & and
// ^ xor
// ~ complement

// if-else statements
//writing a propgram, a child can only start primary school if he/she is 7years or older
let age = 9;

if(age >= 7){
    console.log('can start primary school')
}else{
    console.log('cannot start primary school');
}

//if .. else if .. else
//writing a program to tell various age groups whether they are eligible to work or not
let age_2 = 30;
if(age_2 >= 60){
    console.log('You are due for pension, you cannot work here anymore')
} 
else if(age_2 >= 18) {
    console.log('You can start working')
} else {
    console.log(' Ooops! you are a minor, you cannot work');
}

//Switch statements
let day = 'Sunday';
switch(day){
    case 'Sunday':
        console.log('leg day');
        break; // used to prevent the next case from being executed
    case 'Saturday':
        console.log('chest day');
        break;
    case 'Friday':
        console.log('abs day');
        break;
    case 'Saturday':
    case 'Thursday': 
        console.log('arms day');
    default: 
        console.log('no gym on this day');
}

//Data types in JavaScript
let v = 3 // Number
let float = 3.14; // number
let name = "Sam" // string
let canDrive = false //boolean
let Kay; // undefined
console.log(Kay); // prints undefined

//NaN
// console.log(typeof(NaN));

//Arrays
let scores =[100, 98, 96]

console.log(scores);
scores.push(79); // adds 79 to the end of the array for scores
console.log(scores); // pringts the scores with 79 at the end

scores.pop(); // removes the last score , here 79, from the end of the array
console.log(scores); //prints the scores without 79 included because .pop() deletes it

scores.shift(); // removes the first score of th array, here 100
console.log(scores); // prints the scores without the first score (100)

scores.unshift(90); // adds 90 to the beginning of the array for scores
console.log(scores); // prints the scores with 90 at the beginning

console.log(scores.indexOf(98));


//Objects
let car = {
    length: 10,
    price: 300,
    name: 'Honda',
    'full name': 'Honda motors',
}


console.log(car); 

//accessing the properties of objects
console.log(car.length); // prints the length of the car
console.log(car.price); // prints the price of the car
console.log(car.name); // prints the name of the car
console.log(car['full name']); // prints the full name of the car

// for loops
let scienceScores = [90, 100, 70, 80]
let total = 0

//for(initial, condition, increment/decrement)
for (let i = 0; i < scienceScores.length; i++) {
    total = total + scienceScores[i];
}

console.log(total); 

//for each

// scienceScores.forEach(addMarks => {});

//for in

for (const key in car) {
  console.log(key, car[key]);
}

// for of , to iterate over iteratable items

for (const iterator of scores) {
    console.log(iterator)
}

// let course = 'JavaScript'
// for (const iterator of course) {
//     console.log(iterator)
// }

//while loop

let j = 0;
while(j < 10){
    console.log(j);
    j++;
}

// do-while loop
let h = 10;
do {
    console.log(h);
    h++;
} while (h < 10);


// Functions 
function hello(name= 'X'){
    console.log('Hello', name);
}

const friends = ['John', 'Sam', 'Jones']
hello();
friends.forEach((el) => hello(el)); // 


function myFunction(b= 'string') {
    console.log(typeof(b));
}
myFunction();

// Arrow Functions

let hello1 = name => {console.log('Hello', name)};

const friend = ['Reece', 'James', 'Jones']
hello1();
friend.forEach((el) => hello(el));

let add =(q, w) => q+w;
console.log(add(70, 10));


//Map vs Filter vs reduce
//MAP
let arr = [2,4,6,8];
let arr2 = arr.map((items) => items = items/2);
let arr3 = arr.filter((items) => items > 5);

let product = arr.reduce((total, curr) => total * curr)

console.log(product);
console.log(arr3)
console.log(arr2);
console.log(arr);
























































































































