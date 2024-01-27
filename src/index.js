import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header/header";
import SearchBar from "./components/searchbar/searchbar";
import SearchOptions from "./components/searchoptions/searchoptions";
import PokemonList from "./components/pokemonlist/pokemonlist";
import "./index.css";
import { useFetchData } from "./utils/hooks/peticiones";

function App(){
    const [limit, setLimit] = useState(20);
    const [load, results, setUrl, setLoad] = useFetchData("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
    const [, resultsT, setUrlT,] = useFetchData("");

    function filteredList(type){
        setUrlT(type.url);
    }
    function viewNext(){
        setUrl(`https://pokeapi.co/api/v2/pokemon?offset=${limit}&limit=20`);
        setLimit(limit + 20);
        setLoad(true);
    }
    function viewPrev(){
        if(results.previous !== null){
            setLimit(limit => limit - 20);
            setUrl(results.previous);   
            setLoad(true);
        }
    }
    return (
        <>
        <Header />
        <SearchBar/>
        <div className="main">
            <SearchOptions filteredList = {filteredList}/>
            <PokemonList 
            load={load}
            limit={limit} 
            next={viewNext} 
            prev={viewPrev} 
            results={ results && results.results}
            resultsT = {resultsT && resultsT.pokemon}
            />
        </div>
        </>
    );
}

let root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);