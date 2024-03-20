import "./Search.css";



function Search() {
    return (
        <>
            <form className="search">
                <input type="text" placeholder="Buscar..." />
                <button type="submit">Buscar</button>
            </form>

        </>
    )
}

export default Search