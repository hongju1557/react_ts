
import { useCart, type Product } from "../context/CartContext"

// products 배열에 상품 정보를 정의
const products: Product[] = [
    { id: 1, name: "무선마우스", price: 32000 },
    { id: 2, name: "키보드", price: 40000 },
    { id: 3, name: "모니터", price: 120000 },
]

const ProductList = () => {
    const { dispatch } = useCart();

    return(
        <div>
            <h2>상품 리스트</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price.toLocaleString()}원
                        <button onClick={() => 
                            dispatch({type: "ADD", product})}>담기</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;