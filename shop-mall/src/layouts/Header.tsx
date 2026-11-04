import {Link} from 'react-router-dom'
import {useCart} from '../context/CartContext'

const Header = () => {
    const {totalQuantity} = useCart();

    return(
        <header className='header'>
            <h1>
                <Link to='/'>SPACE SHOP</Link>
            </h1>
            <nav>
                <Link to='/'>상품 목록</Link>
                <Link to='/product/new'>상품 등록</Link>
                <Link to='/cart'>장바구니 ({totalQuantity})</Link>
            </nav>
        </header>
    )
}

export default Header;