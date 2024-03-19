function PokemonCard({pokemon}) {

    return <div className="bulbazur">
        <figure>
            {pokemon.imgSrc ? (<img src={pokemon.imgSrc}
                                    alt={pokemon.name}/>) : (<p> ???</p>)}

            <figcaption> {pokemon.name}</figcaption>
        </figure>
    </div>
}



export default PokemonCard;