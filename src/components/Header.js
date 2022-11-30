import NavBar from "./NavBar"
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
    <header>
        <img src="./images/placeholder-logo.png" alt="logo" />
        <NavBar/>
        <div className="basket">
            <FontAwesomeIcon icon={ faBasketShopping }/>
        </div>
    </header>
    )
}


export default Header