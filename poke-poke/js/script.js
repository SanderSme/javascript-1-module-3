const APIurl = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=40"

const pokemonContainer = document.querySelector(".pokemons");

// async function kitchen(){

//     try{
// // Let's create a fake problem
//         await abc;
//     }

//     catch(error){
//         console.log("abc does not exist", error)
//     }
// }

// kitchen();  // run the code

async function getPokemonNames(){
    try {
        const response = await fetch(APIurl);
        const responseJSON = await response.json();
        const pokemonsData = responseJSON.results;
        for (let i = 0; i < pokemonsData.length; i++) {
            pokemonContainer.innerHTML += `<li><span>${pokemonsData[i].name}</span></li>`
        }
    }
    catch(error){
        console.log(error);
        pokemonContainer.innerHTML = `<li><span> ERROR:'(</span></li>`
    }
}

getPokemonNames();