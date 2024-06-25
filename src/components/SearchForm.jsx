import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SearchForm() {
    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handleSubimt = (e) => {
        e.preventDefault();
        navigate(`/search?name=${query}`)
    };

    return (
        <>
            <form className="form_search" onSubmit={handleSubimt}>
                <input
                    type="text"
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Busque um produto"
                />
                <input type="submit" value="Buscar" />
            </form>
        </>
    );
}

export default SearchForm;