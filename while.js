var fun
{

let i =0;
while(i<5) // while loop first check the condition then execute  the block
{
    console.log(i+1)
    console.log(i>1)
    i+=1
}



let j =1;

do{             
    console.log(j)      //j is 1              // do while loop execute the block first ofter check the condition
    console.log(j+1)    // j +1 is 2
    console.log(j<1)
    console.log(j==1)
    
    j+=1;  
}
while(j<6);





let k =1;

do{                                 
    console.log(k+1)
   if(k==1)
   break;
    
    k+=1;  
}
while(k<6);

}