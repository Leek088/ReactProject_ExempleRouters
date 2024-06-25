import './Product.css';
import { useApiRequest } from '../hooks/useApiRequest'
import { useParams } from 'react-router-dom';

function Product() {

    const { id } = useParams();
    const urlApiProduto = `http://localhost:3000/products/${id}`;
    const { data, loading, error } = useApiRequest(urlApiProduto);
    console.log(loading);
    return (
        <>
            {error && <div>{error}</div>}
            {
                loading
                    ? (<div>Carregando...</div>)
                    : (
                        data && (
                            <div>
                                <div>Id do produto: {data.id}</div>
                                <div>Nome do produto: {data.name}</div>
                                <div>Descrição do produto: {data.description}</div>
                                <div>Preço do produto: R${data.price}</div>
                                <div>Disponível: {data.available ? "Sim" : "Não"}</div>
                            </div>
                        )
                    )
            }
        </>

    );
}

export default Product;