//  1. scope : accessible area (functional scope (var) & block scope (let & const))


function test(){
  //create variable in function is a function scope
}


//Example 1 : var(functional scope)

function varscope(){
   if(true){
    var msg="Hello world";  //throughout the function
   // console.log(msg);
   }
   console.log(msg);
}

varscope();

//-----------------------------------------------------------------

//Example 2 : 

function Blockscope(){
   if(true){
    let msg="Hello world";
    const greet="hello const";

    console.log(msg);           //only blockscope - within block we can access
    console.log(greet);
   }
   //console.log(msg);           //cannot aceess
   // console.log(greet);        //cannot aceess
   
}
Blockscope();

//-----------------------------------------------------------------

//Example 3 :

function scopeDiff(){
   if(true){
    var num1=10;
    let num2=20;
    const num3=30;
    console.log(num1);   //we acess 
     console.log(num2);   //we acess
      console.log(num3);  //we acess
   }
     console.log(num1);   //we acess 
   //  console.log(num2);   //not access
   //   console.log(num3);  //not ascces
}
scopeDiff();