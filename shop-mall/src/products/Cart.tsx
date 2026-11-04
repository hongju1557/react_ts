import { useCart } from "../context/CartContext";
import { useProduct } from "../context/ProductContext";

const Cart = () => {
    const { cartItems, totalQuantity, totalPrice } = useCart();
    const { products } = useProduct();

    return(
        <section className="cart">
            <h2>장바구니</h2>
            {cartItems.length === 0 ? (
                <p className="cart_empty">장바구니가 비어 있습니다.</p>
            ) : (
                <>
                    <ul className="cart_list">
                        {cartItems.map(item => {
                            const product = products.find(p => p.id === item.productId);
                            return (
                                
                                <li key={item.productId} className="cart_item">
                                    {/* 상품 정보 */}
                                    <div className="cart_info">
                                        <span>{product?.category}</span>
                                        <span> {product?.pName}</span>
                                    </div>
                                    {/* 상품 수량 */}
                                    <div className="cart_quantity">
                                        <span>{item.qty}</span>
                                    </div>
                                    <strong className="cart_subtotal">
                                        {product ? (product.price * item.qty).toLocaleString() : "0원"}
                                    </strong>
                                </li>

                            )
                        } )}
                    </ul>
                    <div className="cart_summary">
                        <span>총 {totalQuantity}개</span>
                        <strong>{totalPrice.toLocaleString()}원</strong>
                    </div>
                </>
            )}
        </section>
    )
}

export default Cart;