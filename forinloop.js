var arr=
{
    name:"hari", // values
    age:"33",
    breed:"pug"
}
console.log(arr)

for(var i in  arr)
{
    console.log(i)
}

for(var i in  arr)
{
    //console.log(arr[i])
    console.log(i+ ":" +arr[i])
}