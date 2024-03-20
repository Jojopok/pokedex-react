function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }) {
    const handClickNext = () => {
        setPokemonIndex(pokemonIndex + 1);
    };

    const handClickPrev = () => {
        setPokemonIndex(pokemonIndex - 1);
    };

    return (
        <div>
        {pokemonIndex > 0 && <button onClick={handClickPrev}>Précédent</button>}
        {pokemonIndex < pokemonList.length - 1 && <button onClick={handClickNext}>Suivant</button>}
    </div>
    );
}

export default NavBar;