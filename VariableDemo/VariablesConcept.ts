//variable : container which is hold/store data

//var,let,const -specifying data type is optional

//syntax : keyword variableName : data type(optional)-value
//Ex:      var age:number=30
//Ex:      var age=30

var age=30;
console.log(age);

var age=30;
console.log("age");


//Var VS let VS const
//-------------------------------------------

/*
   1)scope
   2)declaration/Assignment
   3)Redeclaration
   4)Reintialization/Re-assignment
   5)Hoisting
 
*/

//var - var is not used this in modern JS/TS.to avoid var because it has functional scope can lead to unexpected issues
//let - use let when you need a variable that can change
//const - Use const when the variable value should not change