//Any DataType -this is superset of all kind of data types

//loses typescript benifits

let value:any="Hello";
console.log(typeof value);
value=100;   //typesafety is not applicable in this particular case
console.log(typeof value);
value=true;
console.log(typeof value);
console.log(value);