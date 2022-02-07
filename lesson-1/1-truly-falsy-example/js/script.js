// *** List of falsy values ****
//
// false
// 0 - the number zero
// "", '' or - empty strings
// null
// undefined
// Nan - Not a Number

// Everything else is Truly


// If we are trying to check if a value exists (if it isn't null or undefined) for example,
// we can do this:

//TODO write example


// rather than having to check for both null and undefined like this:
// if(someVariable !== null && someVariable !== undefined){}

//TODO write example

//example 1 
// const test = ""; //falsy
// const test = 0; //falsy
// const test = undefined; //falsy
// const test = false; //falsy
// const test = null; //falsy

// const test = "Sander"; //truly

// if (test) {
//     console.log("truly");
// } else {
//     console.log("falsy");
// }




// That applies to all the falsy values,
// so we can check that a variable's value is not one of the falsy values
// by writing an if statement like this:





// Example 1 Play with truly and falsy values



// Example 2 Real life example
//some data from the API

// const carsData = [
//     {
//         make: "Tesla",
//         isElectric: true
//     },
//     {
//         make: "BMW",
//         isElectric: false    
//     }
// ]

// carsData.forEach(function (car){
//     console.log(car);
//     if(!car.isElectric) {
//         console.log("car make is " + car.make + " and it is not electric");
//     }
// });