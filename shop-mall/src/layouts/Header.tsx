import { Link } from "react-router-dom"

const Header = () => {

    return(
        <div className="header">
        <h1>SPACE SHOP</h1>
        <Link to='/'>상품 목록</Link>
        </div>
    )
}

export default Header