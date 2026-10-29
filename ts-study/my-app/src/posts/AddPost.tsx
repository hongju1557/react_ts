import { useState } from "react"
import { useNavigate } from "react-router-dom";

const AddPost = () => {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const navigate = useNavigate();

    return(
        <div>
            <h2>글쓰기</h2>
            <form>
                <div>
                    <input type="text" placeholder="제목을 입력하세요."/>

                </div>
                <div>
                    <textarea placeholder="내용을 입력하세요."></textarea>
                </div>
                <button></button>
            </form>
        </div>
    )
}

export default AddPost