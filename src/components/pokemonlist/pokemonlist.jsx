import PokemonCard from "./components/pokemoncard";
import "./pokemonlist.css";

export default function PokemonList({results, next, prev, limit, load}){

    const controles = (
    <div className="controles">
        <button onClick={prev} disabled={load}><i className="bi bi-chevron-double-left h4"></i></button>
        <p className="h5">{limit}</p>
        <button onClick={next} disabled={load}><i className="bi bi-chevron-double-right h4"></i></button>
    </div>);
    
    return (
        <div className="pokemonList">
            {controles}
            {load === false && results.map((item ,index) => <PokemonCard key={index} pokemon={item}/>)}
            {load && <h1>Cargando</h1>}
            {controles}
        </div>
    );
}