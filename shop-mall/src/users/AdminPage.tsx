import { Link } from "react-router-dom";
import { useProduct } from "../context/ProductContext"
import { useUser } from "../context/UserContext";

const AdminPage = () => {
    const {products} = useProduct();
    const {users} = useUser();

    const adminCount = users.filter(user => user.role === "admin").length;

    const totalPrice = products.reduce((sum,product) => sum + product.price, 0);

    const avgPrice = products.length > 0 ?
        Math.round(totalPrice/products.length) : 0;

    return(
        <div className="admin-page">
            <div className="admin-header">

            <h2>관리자 대시보드</h2>
            <div className="admin-menu">
                <Link to='/product/new' className="admin-btn">상품 등록</Link>
                <Link to='/' className="admin-btn">상품 목록</Link>
            </div>
            </div>

            {/* 상품 목록 */}
            <div className="admin-cards">
                <div className="admin-card">
                    <p>전체 상품</p>
                    <p>{products.length}</p>
                </div>
                <div className="admin-card">
                    <p>전체 회원</p>
                    <p>{users.length}</p>
                </div>
                <div className="admin-card">
                    <p>관리자</p>
                    <p>{adminCount}</p>
                </div>
                <div className="admin-card">
                    <p>가격 평균</p>
                    <p>{avgPrice}</p>
                </div>
            </div>
            <h3>최근 등록 상품</h3>
            <div className="admin-table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>상품명</th>
                            <th>카테고리</th>
                            <th>가격</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.pName}</td>
                                <td>{product.category}</td>
                                <td className="admin-num">{product.price.toLocaleString()}원</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



            {/* 회원 목록 */}
            <h3>회원 목록</h3>
            <div className="admin-table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>아이디</th>
                            <th>이름</th>
                            <th>이메일</th>
                            <th>권한</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => 
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === "admin" ? "관리자" : "일반회원"}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            
        </div>
    )
}

export default AdminPage