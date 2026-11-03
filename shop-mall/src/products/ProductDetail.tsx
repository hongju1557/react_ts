import { Link, useParams } from "react-router-dom"
import { useProduct } from "../context/ProductContext";

const ProductDetail = () => {

    const{id} = useParams<{id: string}>();
    const {products} = useProduct();

    //find()로 해당 아이디와 일치하는 상품 찾기
    const product = products.find(p => p.id === Number(id))

    return(
        <div className="product-detail">
            <Link to='/' className="product-detail_back">← 상품 목록</Link>
            <span className="product-detail_category">{product?.category}</span>
            <h2>{product?.pName}</h2>
            <p className="product-detail_price">{product?.price.toLocaleString()}원</p>
            <p className="product-detail_desc">{product?.description}</p>
        </div>
    )
}

export default ProductDetail