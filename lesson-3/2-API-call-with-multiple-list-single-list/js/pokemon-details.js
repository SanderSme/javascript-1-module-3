console.log(document.location.search);

const queryString = document.location.search;

const params = new URLSearchParams(queryString);
console.log(params);
console.log(params.get("name"));

const pokemonName = params.get("name");

const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
console.log(API_URL);

const pokemonDetails = document.querySelector(".pokemon-details");

async function getPokemonDetails(){
    try {
        const response = await fetch(API_URL);
        const singlePokemonDetails = await response.json();
        console.log("singlePokemonDetails: ", singlePokemonDetails);
        const pokemonWeight = singlePokemonDetails.weight;
        console.log(pokemonWeight);
        pokemonDetails.innerHTML = `<div>The pokemon weight is : ${pokemonWeight} kg</div>`;
    }
    catch (error){
        console.log(error);
    }
}

getPokemonDetails();