import './App.css'
import Drink from './components/Drink'
import Box from './props/Box'
import Card from './props/Card'
import Memo from './storage/Memo'
import Todos from './storage/Todos'
import Posts from './posts/Posts'
import PostDetail from './posts/PostDetail.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddPost from './posts/AddPost.tsx'

function App() {
  return (
    <>
    <section className="app">
      <h2>리액트 기초 문법</h2>
      {/* <Greet name="도로롱" age={17}></Greet> */}
      {/* <Greet2 name="트럼프" age={58} doClick={doClick}></Greet2> */}
      {/* <InputValue></InputValue> */}
      {/* <Drink></Drink> */}
      {/* 태그 사이의 내용이 children으로 전달됩니다. */}
      {/* <Box>
        <h3>박스 안의 내용</h3>
        <p>이것은 Box 컴포넌트 안에 있는 내용입니다.</p>
      </Box>
      <Box>
        <h3>또 다른 박스</h3>
        <p>이것은 또 다른 Box 컴포넌트 안에 있는 내용입니다.</p>
      </Box>
      <Card title="공지사항">
        <p>내일은 TypeScript 시험이 있습니다.</p>
      </Card>
      <Card title="오늘의 할 일">
        <ul>
          <li>Props 타입 복습</li>
          <li>children 예제 실습</li>
        </ul>
      </Card> */}
      {/* <Memo></Memo>
      <Todos></Todos> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Posts/>}></Route>
        <Route path='/posts/:id' element={<PostDetail/>}></Route>
        <Route path='/posts/add' element={<AddPost/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </section>
    </>
  )
}

export default App
