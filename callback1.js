
// program 2


var fs = require('fs')
var file = 'data.txt'

function MyFile(err, data)
{
    if(err)
    {
        throw err
    }
    console.log(data)
}
function stat(err, status)
{
    if(err)
    {
        throw err
    }
    if(status.isFile())
    {
        fs.readFile(file, "uts8", MyFile)
    }
}
function fileExists(exists)
{
    if(exists)
    {
        fs.stat(file, status)
    }
}
fs.exists(file, fileExists)
