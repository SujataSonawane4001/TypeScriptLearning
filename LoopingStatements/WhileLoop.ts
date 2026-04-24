//while loop: a while loop statement as long as the condition is true

/* 

while(condition){
statement;
}

*/

//Example 1:

//print numbers: 1........10

let i:number=1;  //initialization

while(i<6){
    console.log(i);  
    i++;             
}

//Example 2: print even numbers  1.......10


//Method 1
let num1:number=2;  //initialization

while(num1<=10){
    console.log(`${num1} is even  number`);  
          num1+=2;      
}

//method 2

let num2:number=1;
while(num2<=10){
    if(num2%2==0){
    console.log(num2);
  
    }
    num2++;
}


//Example 3: print odd numbers  1.......10

//Method 1
let num3:number=1;  //initialization

while(num3<=10){
    console.log(`${num3} is odd  number`);  
          num3+=2;      
}

//method 2

let num4:number=1;
while(num4<=10){
    if(num4%2!=0){
    console.log(num4);
  
    }
    num4++;
}

//Example 4: print decending order numbers  1.......10

let num5:number=10;  //initialization

while(num5>=1){
    console.log(`${num5}`);  
          num5--;      
}

//infinite loop--when the condition never become false then it will go infinite loop

while(true){
    console.log(1);  //it will go to infinite
}