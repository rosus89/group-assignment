import NavBar from "./NavBar"
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import Basket from "./Basket"
import {useState} from 'react'

function Header({basket, dispatch}) {
    const [modal, setModal] = useState(false)
    const toggleModal = () => setModal(!modal)
    return (
    <header>
        <img src="./images/placeholder-logo.png" alt="logo" />
        <NavBar/>
        <div className="basket" onClick={()=>toggleModal()}>
            <FontAwesomeIcon icon={ faBasketShopping }/>
            <Basket basket={basket} dispatch={dispatch} display={modal}/>
        </div>
    </header>
    )
}


export default Header