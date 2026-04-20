//Void data type : pecially used for functions not variables
//used for functions that don't return anything


//function : function is nothing but a group of sattement whicg perform certain task.we need to invoke or call the function for function execution

function sum():void    //void means function is not returning anything, void is an optional
{
  console.log(10+20); //30  --just prinitng the output

}
sum();


function summ():number    //here function is returning something, we need to specify data type
{
  return (10+20); 

}
summ();


function show(x:number,y:number):number{
    return(x+y);
}
let result=show(10,40);
console.log(result);