// 4. Reinitialization/Re-assignments

//var and let - re-assignment allowed
//const - re=assignment not allowed(only constants allowed - cannot change the value)


//Example 1: var allows re-assignemnt

var age=25;
age=30;  //allowed
console.log(age);

//Example 2: let allows re-assignemnt

let abc=50;
abc=40;  //allowed
console.log(abc);

//Example 3: const not allows re-assignemnt

const std=5;
//std=40;  // not allowed--Cannot assign to 'std' because it is a constant.
console.log(std);