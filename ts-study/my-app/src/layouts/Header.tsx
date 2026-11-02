import { Link } from "react-router-dom"

const Header = () => {

    return(
        <header className="header">
            <Link to='/'>SPACE SHOP</Link>
            <Link to='/'>상품 목록</Link>
            <Link to='/cart'>장바구니</Link>
        </header>
    )
}

export default Header
