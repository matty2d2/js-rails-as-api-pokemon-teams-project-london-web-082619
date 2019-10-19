
document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');

    populateTrainers();

    function populateTrainers(){
        getTrainers()
            .then(displayAllTrainers)
    }

    function displayAllTrainers(array){
        array.forEach(displayTrainer);
    }

    function displayTrainer(trainer){
        const card = createCard();
        const pokemonList = createPokemonList();
        main.appendChild(card);
        card.append(createImg(trainer), createP(trainer), createAddPokemonButton(trainer, pokemonList, card), pokemonList);
        displayTrainerPokemons(trainer.pokemons, pokemonList, card);
        return card;
    }

    function createP(trainer){
        const newP = document.createElement('p');
        newP.innerText = trainer.name
        return newP;
    }

    function createImg(trainer){
        const newImg = document.createElement('img');
        newImg.src = trainer.image;
        return newImg;
    }

    function displayTrainerPokemons(array, list, card){
        array.forEach(pokemon => addPokemonToList(pokemon, list, card));
    }

    function addPokemonToList(pokemon, list, card){
        list.append(createLi(pokemon, card));
    }

    function createCard(){
        const newDiv = document.createElement('div');
        newDiv.className = 'card';
        return newDiv;
    }

    function createAddPokemonButton(trainer, list, card){
        const newButton = document.createElement('button');
        newButton.innerText = 'Add Pokemon';
        newButton.addEventListener('click', () => addPokemon(trainer, card))
        return newButton;
    }

    function createPokemonList(){
        const newUl = document.createElement('ul');
        return newUl;
    }

    function createLi(pokemon, card){
        const newLi = document.createElement('li');
        newLi.innerText = `${pokemon.nickname} (${pokemon.species})`;
        newLi.insertAdjacentElement('beforeend', createReleaseButton(pokemon, card));
        return newLi;
    }

    function createReleaseButton(pokemon, card){
        const newButton = document.createElement('button');
        newButton.className = 'release';
        newButton.innerText = 'Release';
        newButton.addEventListener('click', () => releasePokemon(pokemon, card))
        return newButton;
    }

    function releasePokemon(pokemon, card){
        deletePokemon(pokemon)
            .then(trainer => main.replaceChild(displayTrainer(trainer), card))
    }

    function addPokemon(trainer, card){
        if (trainer.pokemons.length < 6){
            postPokemon(trainer)
            .then(json => {main.replaceChild(displayTrainer(json), card)})
        } else{
            alert(`${trainer.name} has too many pokemon. (max. 6)`)
        }
    }

})



