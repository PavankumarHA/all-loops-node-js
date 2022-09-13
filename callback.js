function Func1(x, cb)
{
    console.log('i am f1')
    console.log(x)
    cb()
}
function Func2()
{
    console.log('i am f2')
}
Func1('Hello', Func2)
//Func1(Func2)
//Func2()
setTimeout(Func2,5000)


// anothe program 2


console.log("user 1 made a request")
setTimeout(callMeBack, 5000)

console.log("user 2 made a request")
setTimeout(callMeBack, 6000)

console.log("user 3 made a request")
setTimeout(callMeBack, 9000)

function callMeBack()
{
    console.log('queried the database and delivered to the user')
}
