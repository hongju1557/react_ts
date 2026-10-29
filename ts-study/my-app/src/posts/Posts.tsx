import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

export interface Post{
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Posts = () => {
    const [posts, setPosts] = useState<Post[]>();

    //jsonplaceholder에서 데이터 가져오기
    useEffect(()=> {
        const fetchPosts = async () => {
            try {
                const response =
                await axios.get("https://jsonplaceholder.typicode.com/posts")
                setPosts(response.data);
            } catch (error) {
                alert("오류 발생")
            }
        }// 닫기
        fetchPosts(); //호출
    }, []);

    return(
        <div>
            <h2>게시글 목록</h2>
            <ul>
                {posts?.map(post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.id}{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts