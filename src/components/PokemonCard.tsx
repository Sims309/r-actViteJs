interface PokemonList {
	name: string;
	image?: string;
	id: number;
}

function PokemonCard({ name, image, id }: PokemonList) {
	return (
		<div>
			{image ? <img src={image} alt={name} /> : <p>Hellooooooooooooooooo</p>}
		</div>
	);
}

export default PokemonCard;
