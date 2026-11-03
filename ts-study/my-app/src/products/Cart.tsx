import { useCart } from "../context/CartContext";

const Cart = () => {
    const {cart, dispatch, totalPrice} = useCart();

    return(
        <div>
            <h2>장바구니</h2>
            <ul>
                {cart.map(item =>(
                    <li>
                        {item.name} x {item.qty},
                        <span>금액: {item.price*item.qty}</span>
                        <button onClick={()=> 
                            dispatch({type:"REMOVE", id: item.id})
                        }>삭제</button>
                    </li>
                ))}
            </ul>
            <p>총역: {totalPrice.toLocaleString()}</p>
        </div>
    )
}

export default Cart;