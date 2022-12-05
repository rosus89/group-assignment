import Header from './Header'
import Footer from './Footer'
import './Layout.css'
import Basket from "./Basket"

function Layout({children, basket, dispatch, modal}) {
    return (
        <div className='wrapper' role="none">
        <Header basket={basket} dispatch={dispatch} />
        {children}
        <Footer />
        <Basket basket={basket} dispatch={dispatch} modal={modal}/>
        </div>
    )
}

export default Layout