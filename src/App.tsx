import PokemonCard from "./components/PokemonCard";

function App() {
	const pokemonList = [
		{
			name: "bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
			id: 1,
		},
		{
			name: "mew",
			id: 2,
		},
	];
	return (
		<div>
			{pokemonList.map((tab) => (
				<PokemonCard
					id={tab.id}
					name={tab.name}
					image={tab.imgSrc}
					key={tab.id}
				/>
			))}
		</div>
	);
}

export default App;
