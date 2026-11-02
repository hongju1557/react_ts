import { useReducer, type ReactNode } from "react"
import { CartContext, type CartItem } from "./CartContext"

const CartReducer = (state:CartItem,action): CartItem[] => {

}

const CartProvider = ({children}: {children: ReactNode}) => {
    const [cart,dispatch] = useReducer(CartReducer, []);

    return(
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
            </CartContext.Provider>
    )
}

export default CartProvider