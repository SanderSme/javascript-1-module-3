//fat arrow function
// const showPetName = function(name) {
//     console.log("the pet name is: " + name);
// }


// const showPetName = (name, age) => {
//     console.log("the pet name is: " + name + "The age is: " + age);
// }
// showPetName("Lion", "14");
//This function works without both "()" and "{}", but you should write them

//concatenation
// const name = "Sander";
// const age = "27";
// console.log(`my name is ${name} my age is ${age}`);

//scope
//3 types: global scope, functional scope(local), block scope

//global scope
// const cityName = "Oslo";
// function showMeCity (){
//     console.log(cityName);
// }
// showMeCity();

// function isScania(){
//     if(cityName === "Oslo"){
//         console.log(cityName + " is Scandinavian");
//     } else {
//         console.log("not Scandinavian");
//     }
// }

// isScania();


//function scope:

// function showMeCity (){
//     const cityName = "Oslo";
//     console.log(cityName);
// }
// showMeCity();

// function isScania(){
//     if(cityName === "Oslo"){
//         console.log(cityName + " is Scandinavian");
//     } else {
//         console.log("not Scandinavian");
//     }
// }

// isScania();


//Block scope
// {
//     const name = "Sander";
//     const car = "Tesla";
//     console.log(name);
//     console.log(car);
// }
//Can only log inside "{}"

//this
// const myObject = {
//     number: 10,
//     myFunction: function(){
//         console.log(this.number);
//     }
// }
// myObject.myFunction();


//ternary operator
// const pet = "rhino";
// let isDangerous; //Boolean
// if(pet==="rhino") {
//     isDangerous = true;
// } else {
//     isDangerous = false;
// };

// isDangerous = pet ==="rhino" ? true : false; //same as if-condition
