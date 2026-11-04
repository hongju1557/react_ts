import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import ProductList from './products/ProductList'
import ProductProvider from './context/ProductProvider'
import ProductDetail from './products/ProductDetail'
import AddProduct from './products/AddProduct'
import CartProvider from './context/CartProvider'
import Cart from './products/Cart'

function App() {

  return (
    <ProductProvider>
      {/* ProductProvider 내부의 컴포넌트는 children 이다.*/}
      <CartProvider>
        {/* ProductProvider를 참조하므로 내부에 위치한다. */}
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<ProductList />} />
              <Route path='/product/:id' element={<ProductDetail />} />
              <Route path='/product/new' element={<AddProduct />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </main>
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  )
}

export default App
