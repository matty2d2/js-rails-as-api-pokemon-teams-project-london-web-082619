const BASE_URL = "http://localhost:3000";
const TRAINERS_URL = `${BASE_URL}/trainers/`;
const POKEMONS_URL = `${BASE_URL}/pokemons/`;
const embed = '?_embed=pokemons';


function getTrainers(){
    return fetch(TRAINERS_URL)
        .then(objectify)
}

function deletePokemon(pokemon){
    const method = 'DELETE';
    return  fetch(POKEMONS_URL+`${pokemon.id}`, configObj(pokemon, method))
        .then(objectify)
}

function postPokemon(trainer){
    const method = 'POST';
    return fetch(POKEMONS_URL, configObj(trainer, method))
        .then(objectify)
}

function configObj(obj, method){
    return {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(obj),
    }
}

function objectify(response){
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('HTTP status code ' + response.status);
    }
}
