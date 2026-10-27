import { useState } from "react"
import DrinkList from "./DrinkList";

const Drink = () => {

    const [drinks, setDrinks] = useState<string[]>([])

    const [InputValue,setInputValue] = useState<string>("");

    //입력값 변경 핸들러
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    // 버튼을 클릭할때마다 배열에 저장
    const addDrink = () => {
        if(InputValue.trim() === ""){
            alert("음료를 입력하세요.")
            return;
        }
        //음료를 기존 배열에 추가
        setDrinks([...drinks, InputValue]);
        setInputValue(""); //입력값 초기화
    }

    return(
        <div>
            <h2>음료 리스트</h2>
            <input type="text"
            value={InputValue}
            onChange={handleInputChange}
            placeholder="음료를 입력하세요." />
            <button onClick={addDrink}>음료 추가</button>
            {/* <p>음료 : {InputValue}</p> */}
            {/* <p>음료 리스트 : {drinks}</p> */}
            {/* <ul>
                {drinks.map((drink, index) => (
                    <li key={index}>{drink}</li>
                ))}
            </ul> */}
            <DrinkList drinks={drinks}></DrinkList>
        </div>
    )
}

export default Drink