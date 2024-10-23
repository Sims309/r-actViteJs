  
   function PokemonCard () {
      const pokemon = pokemonList[0].name;
      const image = pokemonList[0].imgSrc;
      // const pokemon = pokemonList[1].name;
      // const image = pokemonList[1].imgSrc;
      
    return ( 
        <div>
            {image? 
              <figure>
                <img src={image} alt={pokemon} />
                <figcaption>{pokemon}</figcaption>               
            </figure>:<p>???</p>
            }
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
    //   imgSrc:"???",
     },
  ];


export default PokemonCard;