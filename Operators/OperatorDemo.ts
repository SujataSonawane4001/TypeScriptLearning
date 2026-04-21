let a:number=10,b:number=20;    //decalration and assignment

//Arithmetic operations

console.log("**********Arithmetic operator******************");
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(5**2);

 //Assignement operators =

 console.log("********Assignment OPerators***************");
a=100;  //redaclaration not possible but reassign is possible
b=50;

//a+=b;  //expression
//a=a+b;  //expression
//console.log(a);

console.log(a+=b);    //a=a+b
console.log(a-=b);    //a=a-b
console.log(a*=b);    //a=a*b
console.log(a/=b);    //a=a/b
console.log(a%=b);    //a=a%b


//Relational opertors ->compare the value and alsways returns a bollean value - true/false

// >  <  >=   <=  ==  !=   ===(strict equality)
console.log("*******relational operator***************")

a=10;
b=20;

console.log(a>b);
console.log(a<b);
console.log(a<=b);
console.log(a>=b);
console.log(a==b);
console.log(a!=b);

//difference between  == (equality)      ===(strict equlaity)
console.log("difference between  == (equality)      ===(strict equlaity)")
let num1:any=10;  //number type
let num2:any="10";  //string

console.log(num1==num2);  //compare only values
console.log(num1===num2);  //it will compile the value along with data type



//Logical operators-  &&  ||  !
//returns true/false
//works between boolean variablesl

//  b1      b2          &&        ||         !b1
//-----------------------------------------------------
//true     true        true      true      false
//true     false       false     true      false
//false    true        false     true      true
//false    fasle       false     false     true


console.log("**************logical operators ***********************");

let b1:boolean=true;
let b2:boolean=false;

console.log(b1 && b2);  //false
console.log(b1 || b2);  //true
console.log(!b1);
console.log(!b2);


//combimation of logical and relational operators

console.log("**mixing of logical and relational operators******");
console.log(20>10 && 10>5);  //true
console.log(10<20 || 5>10);  //true


