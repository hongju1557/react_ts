import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import ProductList from './products/ProductList'
import ProductProvider from './context/ProductProvider'
import ProductDetail from './products/ProductDetail'

function App() {

  return (
    <>
    <ProductProvider>
    <BrowserRouter>
      <Header></Header>
      <main>
        <Routes>
          <Route path='/' element={<ProductList/>}></Route>
          <Route path='/products/:id' element={<ProductDetail/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
    </ProductProvider>
    </>
  )
}

export default App
