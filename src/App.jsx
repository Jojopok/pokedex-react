import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard.jsx";
import "./components/PokemonCard.css";


function App() {

    const [pokemonIndex, setPokemonIndex] = useState(0);

    const handClickNext = () => {
        setPokemonIndex(pokemonIndex + 1);
    }

    const handClickPrev = () => {
        setPokemonIndex(pokemonIndex - 1);
    }

    const pokemonList = [
        {
            name: "bulbasaur",
            imgSrc:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
            name: "charmander",
            imgSrc:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        },
        {
            name: "squirtle",
            imgSrc:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        },
        {
            name: "pikachu",
            imgSrc:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        },
        {
            name: "mew",
        },
    ];

    return (
        <div>
            <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
            {pokemonIndex > 0 && <button onClick={handClickPrev}>Précédent</button>}
            {pokemonIndex < pokemonList.length - 1 && <button onClick={handClickNext}>Suivant</button>}
        </div>

    );
}
export default App;
