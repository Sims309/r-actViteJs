function NavBar({pokemonIndex, handlePrevClick,handleNextClick,pokemonList}){
    return (
        <div>
  {pokemonIndex > 0?<button type="button" onClick={handlePrevClick}>Précédent</button>:""}
          
		{pokemonIndex < pokemonList.length-1? (<button type="button" 
        onClick={handleNextClick} >Suivant</button>):""}
        </div>
    )
}

export default NavBar;