import './Search.css';

function Search({ onChange }) {
    return (
        <div className="search">
            <input type="text" placeholder="Please enter a name to filter actors" onChange={(e) => onChange(e.target.value)}></input>
        </div>
    )
}

export default Search;