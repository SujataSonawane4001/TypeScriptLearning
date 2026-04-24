//for loop : a for loop is typically used when the number of iteration is known before hand

/*syntax:

for(initialization ; condition ; inc/dec)
{
      //statement;
}

*/

//Example 1: print 1......10
 console.log("print 1......10");
for(let i=1;i<=10;i++){
    console.log(i);
}

//Example 2: print 10......1
 console.log("decending order");
for(let i=10;i>=1;i--){
    console.log(i);
}

//Example 3: print even number 1.......10

//Method 1
 console.log("even number : method 1");
for(let i=2;i<=10;i+=2){
    console.log(i);
}

//Method 2
console.log("even number : method 2");
for(let i=1;i<=10;i++){
    if(i%2==0){
console.log(i);
    }
    
}

//Example 4: 
let s:number;  //here tihs s is global varaible
/*

for(s=1;s<=5;s++){     //global varaible-> s
   console.log(s);
}
console.log(s);  // it is printed 1 to 6
*/

for(let s=1;s<=5;s++){    //this particular s only blong to for loop //local scope variable ->s
  console.log(s);
}
//console.log(s); -->this sattement given an error because of global declaration

//for(let s:number=1;s<=5;s++) 

//Example 5: 

console.log("without block")

let l:number;
for(l=1;l<=5;l++);
console.log(l);