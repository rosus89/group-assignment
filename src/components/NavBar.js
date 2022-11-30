import "./NavBar.css"
import { Link } from "react-router-dom";
function NavBar () {
    return (
        <nav>
        <ul>
            <li className='nav-link'><Link  to="/">Home</Link></li>
            <li className='nav-link'><Link  to="/about">About</Link></li>
            <li className='nav-link'><Link  to="/products">Products</Link></li>
        </ul>
        </nav>
    )
}

export default NavBar