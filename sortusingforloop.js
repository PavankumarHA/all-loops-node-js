let arr = [10, 40, 20 ,60, 50]

for(let i=0; i<=arr.length; i++)
{
for(let j=i+1; j<=arr.length; j++)
{
    if(arr[i]>arr[j])
    {
        let temp
    temp = arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
}
}
console.log(arr)
        