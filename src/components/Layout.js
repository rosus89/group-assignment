import Header from './Header'
import Footer from './Footer'
import './Layout.css'

function Layout({children, basket, dispatch}) {
    return (
        <div className='wrapper' role="none">
        <Header basket={basket} dispatch={dispatch} />
        {children}
        <Footer />
        </div>
    )
}

export default Layout