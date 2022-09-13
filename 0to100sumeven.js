let sum=0 
for(i=0;i<=100;i++)
{
  if(i%2==0)
  {
    sum=sum+i
  }
}
console.log(sum)



// program 2

function isEven(n) {
    return n % 2 == 0;
  }
  
  function findSum(no) {
    let sum = 0;
  
    for (var i = 1; i <= no; i++) {
      if (isEven(i)) {
        sum += i;
      }
    }
    return sum;
  }
  
  console.log(findSum(100));