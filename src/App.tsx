import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
	{
		id: 1,
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		id: 4,
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		id: 7,
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		id: 25,
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		id: 151,
		name: "mew",
		imgSrc: "",
	},
];

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);

	const handlePrevClick = () => {
		if (pokemonIndex > 0) {
			setPokemonIndex(pokemonIndex - 1);
		}
	};

	const handleNextClick = () => {
		if (pokemonIndex < pokemonList.length - 1) {
			setPokemonIndex(pokemonIndex + 1);
		}
	};

	return (
		<div>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />

			<button type="button" onClick={handlePrevClick}>
				Précédent
			</button>
			<button type="button" onClick={handleNextClick}>
				Suivant
			</button>
		</div>
	);
}

export default App;
