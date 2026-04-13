// 3. Redecalartion behaviour

//var - allows the re-declaration
//let and const- not allow the re-decalartion(making code safer)


//Example 1: var allows the redeclaration  
// if u redeclare the varaible multiple time is not typesafesty-- this is not type safe therfore we don't use var with redeclaration

var city="newyork";

var city="los Angeles";
console.log(city);

//EXample 2:  let - not allowed redeclaration

//let state="Maharsahtra";
//let state="Satatra";
//console.log(state);




//EXample 2:  const - not allowed redeclaration

//const planet="Earth";
//const planet="Jupiter";
//console.log(planet);