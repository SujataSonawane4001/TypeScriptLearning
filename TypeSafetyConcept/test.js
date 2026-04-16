//how JS is dynamically programmed Lanaguage?


//This is dynamically typed language behaviour
let age=25;  //age is number type
console.log(typeof(age)); //number

age="thirty";  //age is become string
console.log(typeof(age));  //String

console.log(age);  //Thirty


//why it is not typesafety? --JS is not typesafety

let message="Hello"  //String
let count=32;        //number

message=100; //trying to assign numeric value there is no compile time error
             //It is allowing to us store any kind of data therefore no type safety


let result="5"+3;   //String --it is not giving any compile time error
console.log(result);



