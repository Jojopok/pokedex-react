import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard/PokemonCard.jsx";
import "./components/PokemonCard/PokemonCard.css";
import NavBar from "./components/NavBar/NavBar.jsx";

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

function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);
    const handClickNext = () => {
        setPokemonIndex(pokemonIndex + 1);
    };

    const handClickPrev = () => {
        setPokemonIndex(pokemonIndex - 1);
    };
    return (
        <div>
            <div>
                <NavBar setPokemonIndex={setPokemonIndex} pokemonIndex={pokemonIndex} pokemonList={pokemonList} />
            </div>

                <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
        </div>

    );
}
export default App;
