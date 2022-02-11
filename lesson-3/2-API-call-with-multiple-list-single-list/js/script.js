const APIurl = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=40"

const pokemonContainer = document.querySelector(".pokemons");

async function getPokemonNames(){
    try {
        const response = await fetch(APIurl);
        const responseJSON = await response.json();
        const pokemonsData = responseJSON.results;
        for (let i = 0; i < pokemonsData.length; i++) {
            pokemonContainer.innerHTML += `<li><span><a href="pokemon-details.html?name=${pokemonsData[i].name}">${pokemonsData[i].name}</a></span></li>`
        }
    }
    catch(error){
        console.log(error);
        pokemonContainer.innerHTML = `<li><span> ERROR:'(</span></li>`
    }
}

getPokemonNames();