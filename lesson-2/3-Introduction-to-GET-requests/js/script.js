//API's API's
//as a frontend developer you will need to make requests to those
//API's in order to get data and use it in your web location

//Example 1
// https://catfact.ninja/

const URL = "https://catfact.ninja/facts";

const factsContainer = document.querySelector(".my-cats-facts");

fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const myCatFactsArr = data.data;
        for( let i = 0; i < myCatFactsArr.length; i++){
            console.log(myCatFactsArr[i].fact);
            if (i===4) {
                break;
            }
            factsContainer.innerHTML += `<li>${myCatFactsArr[i].fact}</li>`
        }
    })
    .catch((error) => {
        console.log(error);
    })