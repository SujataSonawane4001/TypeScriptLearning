//Teranary (conditional opeartor)

//  ?:
//         true :  false
//  exp1 ? res1 : res2;

//ex.1

let a:number=100,b:number=200;

let result:number=(a>b)? a:b;
console.log(result);  //200

//ex.2

let personAge:number=10;
let rest:string= (personAge>=18)? "Adult":"Minor";
console.log(rest);

