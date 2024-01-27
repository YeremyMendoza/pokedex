import { useFetchData } from "../../utils/hooks/peticiones";
import ButtonType from "./components/buttontipe";
import "./searchoptions.css";

export default function SearchOptions({filteredList}){
    const [,results,,] = useFetchData("https://pokeapi.co/api/v2/type/");

    return (
        <div className="searchOption">
            <div className="content">
                <div className="categoria">
                    <p>Tipos</p>
                    <div className="btn-group">
                        {results && results.results.map((type, index) => 
                        <ButtonType 
                        key = {index}
                        type = {type}
                        filteredList = {filteredList}
                        />)}
                    </div>
                </div>
                <div className="categoria">
                    <p>Altura</p>
                    <div className="btn-group">
                        <button className="btn height">
                            <i className="bi bi-arrow-down-short h4"></i>
                        </button>
                        <button className="btn height">
                            <i className="bi bi-medium h4"></i>
                        </button>
                        <button className="btn height">
                            <i className="bi bi-arrow-up-short h4"></i>
                        </button>
                    </div>
                </div>
                <div className="categoria">
                    <p>Peso</p>
                    <div className="btn-group">
                        <button className="btn weigth">
                            <i className="bi bi-arrow-up-short"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}