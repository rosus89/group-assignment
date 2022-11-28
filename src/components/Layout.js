import Header from './Header'
import Footer from './Footer'
import './Layout.css'

function Layout({children}) {
    return (
        <div className='wrapper' role="none">
        <Header />
        {children}
        <Footer />
        </div>
    )
}

export default Layout