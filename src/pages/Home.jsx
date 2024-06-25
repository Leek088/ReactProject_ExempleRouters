import './Home.css'
import { useApiRequest } from '../hooks/useApiRequest'
import { Link } from 'react-router-dom';
function Home() {
    const urlApiProducts = "http://localhost:3000/products"
    const { data, loading, error } = useApiRequest(urlApiProducts);
    return (
        <>
            <h1>Produtos cadastrados:</h1>
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

export default Home;