import { useFetchImg, useSimpleFetchData } from "../../../utils/hooks/peticiones";
import "./pokemoncard.css";

export default function PokemonCard({pokemon}){
    const [data] = useSimpleFetchData(pokemon);
    const [imgSrc] = useFetchImg(data);

    return (
        <div className="tarjeta">
            <div className="pokemon-img">
                {imgSrc? <img src={imgSrc} alt="pokemon" />:<i className="bi bi-arrow-repeat load h2 c-red"></i>}
            </div>
            <div className="contenido">
                {data &&
                <>
                    <div className="pokemon-nombre">
                    <p className="h4">{data && data.name}</p>
                    </div>
                    <div className="pokemon-tipo">
                        {data && data.types.map(({type}, index) => (<div key={index} className={"tipo " + type.name}>{type.name}</div>))}
                    </div>
                </>}
            </div>
        </div>
    );
}