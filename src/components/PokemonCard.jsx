import PropTypes from "prop-types";

function PokemonCard({pokemon}) {

pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    })
}
    return <div className="bulbazur">
        <figure>
            {pokemon.imgSrc ? (<img src={pokemon.imgSrc}
                                    alt={pokemon.name}/>) : (<p> ???</p>)}

            <figcaption> {pokemon.name}</figcaption>
        </figure>
    </div>
}




export default PokemonCard;