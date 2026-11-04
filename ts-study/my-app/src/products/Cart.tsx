import { useCart } from "../context/CartContext";

const Cart = () => {
    const {cart, dispatch, totalPrice} = useCart();

    return(
        <div>
            <h2>장바구니</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} x {item.qty},
                        <span> 금액: {(item.price * item.qty).toLocaleString()}</span>
                        <button onClick={() => 
                            dispatch({type: "REMOVE", id: item.id})}>삭제</button>
                    </li>
                ))}
            </ul>
            <p>총액: {totalPrice.toLocaleString()}원 </p>
        </div>
    )
}

export default Cart;