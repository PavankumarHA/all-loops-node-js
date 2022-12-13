//The ! is the not operator, so it means if “not false” which means true or if “not true” which means false. Here is a list how other values evaluate to booleans if used in a condition:



var programming = false  // whatever we gave here like (true, false), false then it will print 2 , true it will print 1, bcz we havent't given ! this one so it print 2
if(programming) {
    console.log(1);     // if we give ! it pront2, if we not give ! this prit 1
    } else {
        console.log(2);
};


var programming = true
if(!programming) {
    console.log(1);
    } else {
        console.log(2);
};


var programming = true
if(programming) {
    console.log(1);
    } else {
        console.log(2);
};


// function arrayIsEmpty(array) {
//     //If it's not an array, return FALSE.
//     if (!Array.isArray(array)) {
//         return FALSE;
//     }
//     //If it is an array, check its length property
//     if (array.length == 0) {
//         //Return TRUE if the array is empty
//         return true;
//     }
//     //Otherwise, return FALSE.
//     return false;
// }


