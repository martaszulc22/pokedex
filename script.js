let startIndex = 1;
let pokemonNumber = 15;

function createPokemonCard(pokemon) {
    const type = pokemon.types[0].type.name;
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    document.querySelector('#pokemonContainer').innerHTML += `
    <div class="pokemon ${type}">
			<div class="imgContainer">
				<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
					alt="${name}" />
			</div>
			<div class="info">
				<h3 class="name">${name}</h3>
				<span class="type">Type: <span>${type}</span></span>
			</div>
`;
};

function fetchPokemons() {
    for (let i = startIndex; i <= pokemonNumber; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json())
            .then(data => {
                createPokemonCard(data);
            })
    }
};

document.querySelector('#next').addEventListener('click', function () {
    startIndex += pokemonNumber;
    pokemonNumber += pokemonNumber;
    fetchPokemons();
});

fetchPokemons();