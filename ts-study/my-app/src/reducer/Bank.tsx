import { useReducer, useState, type ChangeEvent } from "react"

//state 타입 정의
interface BankState{
    balance: number
    history: string[]
};

type BankAction =
    | {type: "DEPOSIT"; amount: number;}
    | {type: "WITHDRAW"; amount: number}
    | {type: "RESET"; amount: number}


const initialState: BankState = {balance: 0, history:[]}

const bankReducer = (state: BankState, action: BankAction): BankState => {
    switch(action.type){
        case "DEPOSIT":
            return {balance: state.balance + action.amount,        history: [
            ...state.history,
            `입금: ${action.amount.toLocaleString()}원`,
        ],}
        case "WITHDRAW":
            if(action.amount > state.balance){
                alert("잔액이 부족합니다.")
                return state
            }
            return {balance: state.balance - action.amount,
                        history: [
            ...state.history,
            `출금: ${action.amount.toLocaleString()}원`,
        ],
            }
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

const Bank = () => {

    const [state, dispatch] = useReducer(bankReducer, initialState);

    const [amount, setAmount] = useState<number>(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value));
    }

    return(
        <div>
            <h2>은행 입, 출금</h2>
            <h3>잔액 : {state.balance}</h3>
            <input 
                type="number"
                value={amount}
                step={1000}
                onChange={handleChange} 
            />
            <button onClick={()=>
                dispatch({type: "DEPOSIT", amount})
            }>입금</button>
            <button onClick={()=>
                dispatch({type:"WITHDRAW",amount})
            }>출금</button>
            <button onClick={()=>
                dispatch({type:"RESET",amount})
            }>초기화</button>

            <ul>
                {state.history.map((item,index)=> (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Bank