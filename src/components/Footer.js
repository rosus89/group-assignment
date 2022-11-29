
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <ul>
            <li className='footer-link'><a  href="https://www.facebook.com/" ><img src="./images/Facebook_logo.png" alt="facebook"/>  Like us on Facebook</a></li>
            <li className='footer-link'><a  href="https://twitter.com/" ><img src="./images/Twitter-logo.png" alt="twitter"/>  Follow us on Twitter</a></li>
            <li className='footer-link'><a  href="https://www.instagram.com/" ><img src="./images/Instagram_icon.png" alt="instagram"/>  Check us out on Instagram</a></li>
            <li className='footer-link'><a  href="https://github.com/rosus89/group-assignment" ><img src="./images/GitHub-Mark-32px.png" alt="Github"/>  (C) 2022 Team A</a></li>
        </ul>
        </footer>
    )
}

export default Footer