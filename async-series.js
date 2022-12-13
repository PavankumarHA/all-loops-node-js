///// async.series

// When we have to run multiple tasks which depend on the output of the previous task, series comes to our rescue. syntax : async.series(tasks, callback)

// var async = require('async');
// var param1 = 'foobar'
// function withParams(param1, callback) {
//   console.log('withParams function called')
//   console.log(param1);
//   callback()
// }
// function withoutParams(callback) {
//   console.log('withoutParams function called')
//   callback()
// }
// async.series([
//   function(callback) {
//     withParams(param1, callback)
//   },
//   withoutParams
// ], function(err) {
//   console.log('all functions complete')
// })





// var async = require('async');
// async.series([
//     function (callback) {
//         console.log('First Execute..');
//         callback(null, 'userPersonalData');
//     },
//     function (callback) {
//         console.log('Second Execute.. ');
//         callback(null, 'userDependentData');// if we are not give null it print as a undifined
//         // callback( 'userDependentData'); 

//     }
// ],
// function (err, result) {
//     console.log(result);
// });


////// ashync.parallel
// definition : When we have to run multiple tasks independent of each other without waiting until the previous task has completed, parallel comes into the picture.

// async.parallel(tasks, callback)

// var async = require('async');
// async.parallel([
//     function(callback) {
//       setTimeout(function() {
//         console.log('Task One');
//         callback(null, 1);
//       }, 200);
//     },
//     function(callback) {
//       setTimeout(function() {
//         console.log('Task Two');
//         callback(null, 2);
//       }, 100);
//     }
//   ],
//   function(err, results) {
//     console.log(results);
//     // the results array will equal [1, 2] even though
//     // the second function had a shor   ter timeout.
//   });
  
//   // an example using an object instead of an array
//   async.parallel({
//     task1: function(callback) {
//       setTimeout(function() {
//         console.log('Task One');
//         callback(null, 1);
//       }, 200);
//     },
//     task2: function(callback) {
//       setTimeout(function() {
//         console.log('Task Two');
//         callback(null, 2);
//       }, 100);
//       }
//   }, function(err, results) {
//     console.log(results);
//     // results now equals to: { task1: 1, task2: 2 }
//   });



  ////// async mapseries

  //// I'm using async map series to manipulate an array.

  
var async = require('async');
  var sampleArray = [["name1", "age1"], ["name2", "age2"],["name3", "age3"]];

//   async.map(sampleArray, function(data,callback){  // map and async.mapseries both are same but bit difference only bot are printrd as aarray type
async.mapSeries(sampleArray, function(data,callback){
    return callback(null, data[0]);
}, function(err, results) {
    console.log('results : ' + results);  // results : name1,name2,name3  
});
//sample code //["name1","name2","name3"] executes here

async.mapSeries(sampleArray, function(data,callback){
    return callback(null, data[1]);
}, function(err, results) {
    console.log('results : ' + results); // results : age1,age2,age3
});
//sample code //["age1","age2","age3"] executes here


//// another way async.mapseries

var sampleData = [{'name':'name1', 'age':'age1'},{'name':'name2', 'age':'age2'},{'name':'name3', 'age':'age3'}];

async.mapSeries(sampleData, function(data,callback){
    return callback(null, data['age']); // we can change name or age
}, function(err, results) {
    console.log('results : ' + results); // results : name1,name2,name3 
});