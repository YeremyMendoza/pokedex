export default function ButtonType({type, filteredList, clear, setClear}){
    return (
        <button 
        className={"btn tipo " + type.name}
        onClick={() => filteredList(type)}
        >
            {type.name}
        </button>
    );
}