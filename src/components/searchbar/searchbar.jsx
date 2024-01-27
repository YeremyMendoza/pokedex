import "./searchbar.css";

export default function SearchBar(){
    return (
        <div className="searchabar">
            <h1 className="titulo f-lg">Pokedex</h1>
            <div className="form-control search w-50">
                <input type="text" />
            </div>
        </div>
    );
}