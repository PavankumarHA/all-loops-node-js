const express = require('express');
const  app = express();
const fs = require('fs');

const port = 3000;
 
fs.readFile('data.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});
app.get('/',(req,res)=>{

    res.writeHead(200, {'Content-Type': 'video/mp4'});
    let opStream = fs.createReadStream('/Users/pavankumarha/Desktop/big_buck_bunny_720p_1mb.mp4');

    //res.writeHead(200, {'Content-Type': 'audio/mp3'});big_buck_bunny_720p_1mb.mp4/Users/pavankumarha/Desktop
    //let opStream = fs.createReadStream('/home/Downloads/attention_instrument.mp3');

    opStream.pipe(res);
});

app.listen(port, (err) =>{
    if(!err)
    console.log('server started running on:' + port);
    else
    console.log('unable to start server');
})


// var http = require("http");
// var fs = require('fs');
// var music = '/Users/pavankumarha/Downloads/sample-6s.mp3'; // filepath
// var stat = fs.statSync(music);
// let range = req.headers.range
// var readStream;
// // if there is no request about range
// if (range !== undefined) {
//     // remove 'bytes=' and split the string by '-'
//     var parts = range.replace(/bytes=0-/, "").split("-");

//     // var parts = range.replace(/bytes=0-/, "").split("-");

//     var partial_start = parts[0];
//     var partial_end = parts[1];

//     if ((isNaN(partial_start) && partial_start.length > 1) || (isNaN(partial_end) && partial_end.length > 1)) {
//         return res.sendStatus(500);
//     }
//     // convert string to integer (start)
//     var start = parseInt(partial_start, 10);
//     // convert string to integer (end)
//     // if partial_end doesn't exist, end equals whole file size - 1
//     var end = partial_end ? parseInt(partial_end, 10) : stat.size - 1;
//     // content length
//     var content_length = (end - start) + 1;

//     res.status(206).header({
//         'Content-Type': 'audio/mpeg',
//         'Content-Length': content_length,
//         'Content-Range': "bytes " + start + "-" + end + "/" + stat.size
//     });
    
//     // Read the stream of starting & ending part
//     readStream = fs.createReadStream(music, {start: start, end: end});
// } else {
//     res.header({
//         'Content-Type': 'audio/mpeg',
//         'Content-Length': stat.size
//     });
//     readStream = fs.createReadStream(music);
// }
// readStream.pipe(res);




// var fs = require("fs");
 
// // Asynchronous read
// fs.readFile('data.txt', function (err, data) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Asynchronous read: " + data.toString());
// });