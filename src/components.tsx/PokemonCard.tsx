function PokemonCard(){
    const pokemon = pokemonList[0].name;
    const image = pokemonList[0].imgSrc

    return ( 
        <div>
            <h1>Helllo World pokemonCard</h1>
            
            <figure>
                <img src={image} alt={pokemon} />
                <figcaption>{pokemon}</figcaption>
            </figure>
        </div>
        );
}
const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",

    },
  
    {
      name: "mew",
    },
  ];


export default PokemonCard;