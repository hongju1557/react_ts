import './App.css'
import Greet from './components/Greet'
import Greet2 from './components/Greet2'

function App() {



    const doClick = () => {
        alert("버튼이 클릭되었습니다.")
    }

  return (
    <>
    <section className="app">
      <h2>리액트 기초 문법</h2>
      {/* <Greet name="도로롱" age={17}></Greet> */}
      <Greet2 name="트럼프" age={58} doClick={doClick}></Greet2>
    </section>
    </>
  )
}

export default App
