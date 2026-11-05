
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import ProductList from './products/ProductList';
import Header from './layouts/Header';
import Cart from './products/Cart';
import CartProvider from './context/CartProvider';

function App() {

  return (
    <>
      <section className="app">
        {/* CartProvider로 감싸면 내부의 컴포넌트는 children이 됨  */}
        <CartProvider>
          <BrowserRouter>
          <Header />
            <Routes>
              <Route path='/' element={<ProductList />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>

        {/* <Card title="공지사항">
          <p>내일은 TypeScript 시험이 있습니다.</p>
        </Card>

        <Card title="오늘의 할 일">
          <ul>
            <li>Props 타입 복습</li>
            <li>children 예제 실습</li>
          </ul>
        </Card> */}
        {/* <InputValue /> */}
        {/* <Drink /> */}
        {/* 태그 사이의 있는 내용이 Box의 children으로 전달됨 */}
        {/* <Box>
          <h3>박스 안의 내용</h3>
          <p>이것은 Box 컴포넌트 안에 있는 내용입니다.</p>
        </Box>
        <Box>
          <h3>또 다른 박스</h3>
          <p>이것은 또 다른 Box 컴포넌트 안에 있는 내용입니다.</p>
        </Box> */}
        
      </section>
    </>
  )
}

export default App
