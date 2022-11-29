import "./Footer.css"

function Footer() {
    return (
        <footer>
            <ul>
            <li className='footer-link'><a  href="https://www.facebook.com/" target="_blank"><img src="Facebook_logo.png" width="25" height="25"/>Like us on Facebook</a></li>
            <li className='footer-link'><a  href="https://twitter.com/" target="_blank"><img src="Twitter-logo.png" width="25" height="25"/>Follow us on Twitter</a></li>
            <li className='footer-link'><a  href="https://www.instagram.com/" target="_blank"><img src="Instagram_icon.png" width="25" height="25"/>Check us out on Instagram</a></li>
            <li className='footer-link'><a  href="https://github.com/rosus89/group-assignment" target="_blank"><img src="GitHub-Mark-32px.png" width="25" height="25"/>(C) 2022 Team A</a></li>
        </ul>
        </footer>
    )
}

export default Footer