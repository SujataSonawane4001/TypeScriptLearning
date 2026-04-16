//how TS is statically typed programmed Lanaguage? -->typesafety



let data:number=10;  //data is number type


//data="ten";  //it will return compile time error-Type 'string' is not assignable to type 'number'.
console.log(data);  //String


//Typesafety example -->here its exactly working like JS therefore we cannot see differernce if we execute this code with node command also cannot see differernce
//how it become typesafety-->whenever u specify the data type

//let num1="5";   //without specifying data type
//let num2=3;    //without specifying data type

let num1:String="5";   // specifying data type
let num2:number=3;     // specifying data type 

//let r=num1+num2;   //String --it is not giving any compile time error
//let r=num1+num2;   //error:Operator '+' cannot be applied to types 'String' and 'number'.
//console.log(r);
