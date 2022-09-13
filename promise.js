let p = new Promise((resolve, reject)  => {
    let a=1+1
    if(a!=2)
    {
        resolve('success')
    } else
    {
    reject('failed')
    }
    })
    
    
    
    p.then((message) =>
    {
    console.log('this is in the then' + message)
    
    }).catch((message) =>
    {
    console.log('this is in the catch' + message)
    })




    let recordVideo1 = new Promise((resolve, reject)=>
    {
console.log('video 1 recorded')
    })
    let recordVideo2 = new Promise((resolve, reject) => 
    {
console.log('video 2 recorded')
    })
    let recordVideo3 = new Promise((resolve, reject) => 
    {
console.log('video 3 record')
    })

    Promise.race([
        recordVideo1,
        recordVideo2,
        recordVideo3

    ]).then((message) =>{
    console.log(message)
    })