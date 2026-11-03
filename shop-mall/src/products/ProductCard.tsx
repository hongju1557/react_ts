import { Link } from "react-router-dom"
import type { Product } from "../types/products"

const ProductCard = ({product}: {product: Product}) => {
    return(
        <div className="product-card">
            <span>{product.category}</span>
            <h2>
               <Link to={`/products/${product.id}`}> {product.pName}</Link>
            </h2>
            <p>{product.price.toLocaleString()}원</p>
        </div>
    )
}

export default ProductCard