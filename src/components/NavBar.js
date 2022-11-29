import "./NavBar.css"
function NavBar () {
    return (
        <nav>
        <ul>
            <li className='nav-link'><a  href="/">Home</a></li>
            <li className='nav-link'><a  href="/about">About</a></li>
            <li className='nav-link'><a  href="/products">Products</a></li>
        </ul>
        </nav>
    )
}

export default NavBar