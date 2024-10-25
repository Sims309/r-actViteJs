interface PokemonList {
	pokemon: { name: string; imgSrc?: string; id: number };
}

function PokemonCard({ pokemon }: PokemonList) {
	return (
		<div>
			{pokemon.imgSrc ? (
				<img src={pokemon.imgSrc} alt={pokemon.name} />
			) : (
				<p>Hellooooooooooooooooo {pokemon.name}</p>
			)}
		</div>
	);
}

export default PokemonCard;
