import { useState } from "react"
import type { FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { Post } from "./Posts";

const AddPost = () => {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isLoading) return;
        if (!title.trim() || !body.trim()) {
            alert("제목과 내용을 입력해주세요.");
            return;
        }

        setIsLoading(true);
        try {
            // id는 서버에서 생성하므로 전송할 데이터에서 제외합니다.
            const newPost: Omit<Post, 'id'> = {
                userId: 1,
                title: title.trim(),
                body: body.trim(),
            };
            await axios.post<Post>("https://jsonplaceholder.typicode.com/posts", newPost);
            setTitle("");
            setBody("");
            alert("게시글이 성공적으로 등록되었습니다.");
            navigate('/');
        } catch {
            alert("게시글 등록 중 오류가 발생했습니다.");
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <div>
            <h2>글쓰기</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" aria-label="제목" placeholder="제목을 입력하세요."
                        value={title} onChange={(e) => setTitle(e.target.value)}
                        required disabled={isLoading} />

                </div>
                <div>
                    <textarea aria-label="내용" placeholder="내용을 입력하세요." rows={5}
                        value={body} onChange={(e) => setBody(e.target.value)}
                        required disabled={isLoading}></textarea>
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "등록 중..." : "등록"}
                </button>
                <button type="button" disabled={isLoading} onClick={() => navigate('/')}>
                    목록으로
                </button>
            </form>
        </div>
    )
}

export default AddPost
