// 5. Hoisting : without declaring variable or assigning the data into the variable we are trying to
//               access before declaration


//Hoisting - var (hoisted with undefined)
//console.log(a);    //undefined-Variable 'a' is used before being assigned.
var a=10;         
console.log(a);


//console.log(b);    //not intialized-Variable 'b' is used before being assigned.
let b=10;         
console.log(b);

//console.log(c);    //not intialized-Variable 'c' is used before being assigned.
const c=15;         
console.log(c);
