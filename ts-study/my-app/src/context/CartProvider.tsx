import { useReducer, type ReactNode } from "react"
import { CartContext } from "./CartContext"
import type { CartItem, CartAction } from "./CartContext"

const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
    switch(action.type){
        case "ADD": {
            // 이미 장바구니에 담긴 상품인지 확인
            // find 메서드를 사용하여 장바구니에서 해당 상품을 찾음
            const found = state.find((item) => item.id === action.product.id);
            if(found){
                // 이미 장바구니에 담긴 상품이면 수량을 1 증가
                return state.map((item) => 
                item.id === action.product.id ? { ...item, qty: item.qty + 1 } : item)
            }
            // 장바구니에 담기지 않은 상품이면 새로 추가
            return [...state, {...action.product, qty: 1}]
        }
        case "REMOVE":
            // 장바구니에서 해당 상품을 제거
            return state.filter((item) => item.id !== action.id);
        default:
            return state;
    }
}

const CartProvider = ({children}: {children: ReactNode}) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    // 총 수량 구현
    // sum = 0,  sum = sum + qty(누적 합계)
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);

    // 총 가격(price * qty)
    const totalPrice = 
        cart.reduce((sum, item) => sum + (item.price * item.qty), 0)

    return(
       <CartContext.Provider value={{
            cart, 
            dispatch, 
            totalCount, 
            totalPrice
         }}>
        {children}
       </CartContext.Provider>
    )
}

export default CartProvider