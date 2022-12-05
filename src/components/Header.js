import NavBar from "./NavBar"
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'



function Header({basket, dispatch}) {

    return (
    <header>
        <img src="./images/placeholder-logo.png" alt="logo" />
        <NavBar/>
        <div className="basket" onClick={()=>dispatch({type:"toggleBasket"})}>
            <FontAwesomeIcon icon={ faBasketShopping }/>
        </div>
    </header>
    )
}


export default Header