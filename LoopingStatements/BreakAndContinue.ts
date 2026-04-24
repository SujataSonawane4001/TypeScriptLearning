//break :  exit from loop//termainate the loop
console.log("break")

for(let i=1;i<=10;i++){
    console.log(i);
    if(i==5){
        break;
    }
    
}

//Contine : skip the iteration //skip the number//jump into the next iteration

console.log("Contine")

for(let i=1;i<=10;i++){
    
    if(i==5 || i==3 || i==7){
        continue;
    }
    console.log(i);
    
}