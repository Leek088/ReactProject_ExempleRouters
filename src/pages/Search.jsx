import { useSearchParams, Link } from "react-router-dom";
import { useApiRequest } from "../hooks/useApiRequest";

function Search() {
    const [searchParams] = useSearchParams();
    const urlApiProducts = `http://localhost:3000/products?${searchParams}`;
    console.log(urlApiProducts);
    const { data, loading, error } = useApiRequest(urlApiProducts);

    return (
        <>
            <h1>Resultado da pesquisa:</h1>
            {error && <div>{error}</div>}
            {loading
                ? (<div>Carregando...</div>)
                : (
                    <ul className="products">
                        {
                            data && data.map((product) => (
                                <li key={product.id}>
                                    <h2>{product.name}</h2>
                                    <p>Preço: R$ {product.price}</p>
                                    <Link to={`/product/${product.id}`}>Detalhes</Link>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </>
    );
}

export default Search;