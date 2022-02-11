// https://catfact.ninja/

const URL = "https://catfact.ninja/facts";

const factsContainer = document.querySelector(".my-cats-facts");

fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        const myCatFactsArr = data.data;
        for( let i = 0; i < myCatFactsArr.length; i++){
            if (i===4) {
                break;
            }
            factsContainer.innerHTML += `<li>${myCatFactsArr[i].fact}</li>`
        }
    })
    .catch((error) => {
        console.log(error);
        factsContainer.innerHTML = displayError("some error happened");
    })