import {element} from "prop-types";

function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }) {

    const choosePokemon = (index) => {
        setPokemonIndex(index);
    }

    return (
        <div>
            {pokemonList.map((element, index) =>
                <button onClick={() => choosePokemon(index)} key={element.name}> {element.name} </button>)}
        </div>
    );
}

export default NavBar;