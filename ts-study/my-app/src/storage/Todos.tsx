import { useEffect, useState } from "react"

//할 일 타입 정리
type Todo = {
    id: number,
    text: string,
    completed: boolean;
}

//브라우저에 저장된 할 일 목록 가져오기
const loadTodos = ():Todo[] => {
    try {
        const saved = localStorage.getItem("todos");
        //저장된 데이터(JSON 타입)를 자바스크립트 객체로 파싱
        return saved ? (JSON.parse(saved) as Todo[]) : [];
    } catch {
        return []; //할 일이 없음
    }
}

const Todos = () => {
    const [inputValue,setInputValue] = useState<string>("");

    const [todos,setTodos] = useState<Todo[]>(loadTodos);

    //todos가 바뀔때마다 JSON 문자열로 저장
    useEffect(()=> {
        // JSON.stringify(todos): 객체 -> json 데이터
        localStorage.setItem("todos", JSON.stringify(todos));
    })

    const addTodo = () => {
        if(!inputValue.trim()){
            alert("할 일을 입력해주세요.")
            return;
        }
        setTodos([...todos, {
            id: Date.now(),
            text: inputValue,
            completed: false,

        }])
        setInputValue(""); //입력값 초기화
    }

    return(
        <div>
            <h2>할 일 목록</h2>
            <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="할 일을 입력하세요."
            />
            <button
            onClick={addTodo}
            >추가</button>

            {/* 할 일 목록 출력 */}
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Todos