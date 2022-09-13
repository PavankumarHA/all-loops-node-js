
// map1 contains
// 1 => 2
// 2 => 3
// 4 -> 5
var map1 = new Map([[1 , 2], [2 , 3] ,[4, 5]]);

console.log("Map1");
console.log(map1);

// map2 contains
// firstname => sumit
// lastname => ghosh
// website => geeksforgeeks
var map2 = new Map([["firstname" ,"sumit"],
		["lastname", "ghosh"], ["website", "hello"]]);

console.log("Map2");
console.log(map2);

// map3 contains
// Whole number => [1, 2, 3, 4]
// Decimal number => [1.1, 1.2, 1.3, 1.4]
// Negative number => [-1, -2, -3, -4]
var map3 = new Map([["whole numbers", [1 ,2 ,3 ,4]],
			["Decimal numbers" , [1.1, 1.2, 1.3, 1.4]],
			["negative numbers", [-1, -2, -3, -4]]]);

console.log("Map3");
console.log(map3);


// map 4 contains
// storing arrays both as key and value
// "first name ", "Last name" => "sumit", "ghosh"
// "friend 1", "sourav" => "friend 2", "gourav"
var map4 = new Map([[["first name", "last name"],
			["sumit", "ghosh"]],
			[["friend 1", "friend 2"],
			["sourav","gourav"]]]);

console.log("Map4");
console.log(map4);



// another 1

// using Map.prototype[@@iterator]()
// creating an empty map
var map1 = new Map();
 
// adding some elements to the map
map1.set("first name", "sumit");
map1.set("last name", "ghosh");
map1.set("website", "hello")
    .set("friend 1", "gourav")
    .set("friend 2", "sourav");
 
// By default this method returns the
// same iterator object return by entries methods
var getit = map1[Symbol.iterator]();
 
// it prints
// ["first name", "sumit"]
// ["last name", "ghosh"]
// ["website", "hello"]
// ["friend 1", "gourav"]
// ["friend 2", "sourav"]
for(var elem of getit)
    console.log(elem);










// another


// // const fs = require('fs')
// // const path = require('path')
// const config = { ip: '1234.22.11', port: 3000};
// console.log(JSON.stringify(config));

// const config1 = JSON.stringify({ ip: '1234.22.11', port: 3000});
// console.log(JSON.parse(config1));

// // const config2 = require('./config.json');
// // console.log(config2);

// // fs.readFile(path, options, callback);  // readFile asynchronous the read the entire file in the memory and pass 3 orgument path, option, callback 

