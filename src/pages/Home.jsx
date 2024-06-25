import './Home.css'
import { useApiRequest } from '../hooks/useApiRequest'
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
                                    <p>Disponível:&nbsp;
                                        {product.available ? "Sim" : "Não"}
                                    </p>
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