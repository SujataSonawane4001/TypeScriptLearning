// If condition

/*

if(condition){
    //Statements
}

*/

//ex.1  :if age is greater than or eaqual to 20 the message "you are eligible to vote" will be printed

let age:number=20;
if(age>=18){
     console.log("you are eligible to vote");
}


//If-else condition

/*

if(condition){
    //Statements
}else{
    //statements
}

*/

//ex.2  : if number is divided by 2, it is even nuber otherwise it is odd

let num:number=25;

if(num%2==0){
   console.log(num,"number is even");
   
}
else{
    console.log(` ${num} number is odd `);
   
}

//Nested if else condition

/*

if(condition 1){
    //Statements;
}else if(condition 2){
    //statements;
}else{
    statement;
}

*/

//Ex.3 : depending on the marks,display appropriate grade

/*
marks>=90  grade A
marks>=75  grade B
marks>=60  grade c
Grade D
*/

let marks:number=95;

if(marks>=90 && marks<=100){   //condition 1
    console.log("grade A");
}else if(marks>=75 && marks<90){   //condition 2
     console.log("grade B");
}else if(marks>=60 && marks<75 ){  //condition 3
    console.log("grade c");
}else{
    console.log("garde D")
}


//ex.4: browser selection

let browser:string="chrome";
 if(browser==="chrome"){
    console.log("browser is chrome");
 }else if(browser==="firefox"){
    console.log("browser is firefox");
 }else if(browser==="edge"){
    console.log("browser is edge");
 }else{
    console.log("some other browser");
 }


 //switch case  : expression can be return anything

 /*
 switch(expression){
  case value 1:statement;
               break;

  case value 1:statement;
               break;

  case value 1:statement;
               break; 

  default: statement;    

 }


 */

 //Ex.5 : depending on th value of day,print the correspnding day of the week

 let day:number=3;

 switch(day){
   case 1:
    console.log("monday");
    break;
    case 2:
    console.log("tuesday");
    break;
    case 3:
    console.log("wednesday");
    break;
    case 4:
    console.log("thursday");
    break;
    case 5:
    console.log("thursday");
    break;
    case 6:
    console.log("friday");
    break;
    case 7:
    console.log("saturday");
    break;
    default: console.log("Invalid week");

 }


 //ex.6 :the swith case statement can alo include an expression

 let x:number=10,y:number=5;

 switch(x-y){    //expression
    case 0: console.log("result is zero");
    break;
    case 5: console.log("result is five");
    break;
    case 10: console.log("result is ten");
    break;
    default:console.log("result will be something else");

 }