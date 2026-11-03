import { useState } from "react"
import { ProductContext } from "./ProductContext"
import type { NewProduct, Product } from "../types/products"
import { initialProducts } from "../datas/products"

const ProductProvider = ({children} : {children: React.ReactNode}) => {

    const [products,setProducts] = useState<Product[]>(initialProducts);


    // const addProduct = (newProduct: NewProduct) => {
    //     const product: Product = {...newProduct, id: Date.now()};
    //     setProducts([...products, product])
    // }

    return(
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider