import { createContext, useContext } from "react";

export interface Product{
    id:number;
    name:string;
    price:number;
}

export interface CartItem extends Product {
    qty:number; //수량

}

export type CartAction = 
    | {type: "ADD", product: Product}
    | {type: "REMOVE", id: number}

interface CartContextType{
    cart: CartItem[],
    dispatch: React.Dispatch<CartAction>,
}

export const CartContext = createContext<CartContextType | null>(null);

export function useCart():CartContextType{
    const context = useContext(CartContext)
    if(!context){
        throw new Error("useCart는 CartProvider 안에서만 사용할 수 있습니다")
    }
    return context;
}
