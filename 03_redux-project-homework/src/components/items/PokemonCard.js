function PokemonCard({ pokemon }) {

    return (
        <div>
            <h3>포켓몬 이름 : { pokemon.name }</h3>
            <p>
                <a href={pokemon.url}>상세보기 url : { pokemon.url }</a>
                <a href={pokemon.sprites.front_default}></a>
            </p>
        </div>
    );
}

export default PokemonCard;