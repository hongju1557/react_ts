import { useReducer, type ReactNode } from "react"
import { CartContext, type CartAction, type CartItem } from "./CartContext"

const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
    switch(action.type){
        case"ADD":{
            const found = state.find((item)=> item.id === action.product.id);
            if(found){
                return state.map((item)=>
                item.id === action.product.id ? {...item, qty: item.qty + 1}: item)
            }
        return[...state,{...action.product, qty: 1}]
        }
        case "REMOVE":
            return state.filter((item) => item.id !== action.id);
        default:
            return state;
    }

}

const CartProvider = ({children}: {children: ReactNode}) => {
    const [cart,dispatch] = useReducer(cartReducer, []);

    return(
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
            </CartContext.Provider>
    )
}

export default CartProvider
