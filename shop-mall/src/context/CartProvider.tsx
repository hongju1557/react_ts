import { useState } from "react";
import { CartContext } from "./CartContext";
import type { CartItem } from "../types/cart";
import { useProduct } from "./ProductContext";

const CartProvider = ({children}: {children: React.ReactNode}) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    
    const {products} = useProduct();

    // 장바구니에 상품 추가
    const addToCart = (productId: number, qty: number) => {
        setCartItems(prevItems => {
            // 이미 장바구니에 있는 상품인지 검색
            const existingItem = prevItems.find(item => 
                item.productId === productId)
            if(existingItem){
                // 이미 장바구니에 있는 상품(1 증가)
                return prevItems.map(item => 
                    item.productId === productId 
                    ? {...item, qty: item.qty + qty} : item
                )
            }else{
                // 장바구니에 처음으로 담기
                return [...prevItems, {productId, qty}]
            }
        })
    }

    const totalQuantity
    = cartItems.reduce((sum,item) => sum+item.qty,0)

    const totalPrice = cartItems.reduce((sum, item) => {
        const product = products.find(p=> p.id === item.productId);
        return sum + (product ? product.price * item.qty : 0);
    },0
    );

    return(
        <CartContext.Provider value={{cartItems, addToCart,totalQuantity,totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;