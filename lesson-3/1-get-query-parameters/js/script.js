//  I want to check that I have a param called school


// console log I have the param

// I want to check that this param is equal to noroff
// okay the param is Noroff

// else redirect to another page

console.log(document.location);
console.log(document.location.search);

const queryString = document.location.search;

const params = new URLSearchParams(queryString);
console.log(params);
console.log(params.get("school"));
const mySchoolParam = params.get("school");

if(!params.has("school")){
    console.log("i dont have the param");
} else if (params.get("school") === "noroff"){
    console.log("okay the param is Noroff");
} else {
    document.location.href = "school.html";
}