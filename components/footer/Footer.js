import Link from "next/link";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container-footer">
          <div className="about">
            <h3>
              <span>About us</span>
            </h3>
            <p>
              Welcome to Holidaze where we offer Hotels, B&B around Bergen area.
              With us you will always have a good nights sleep.
            </p>
          </div>

          <div className="pages">
            <h3>
              <span>Pages</span>
            </h3>
            <ul>
              <li>
              <Link href="/">Home</Link>
              </li>
              <li>
              <Link href="/hotels">Hotels</Link>
              </li>
              <li>
              <Link href="/contact">Contact</Link>
              </li>
              <li>
              <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="socials">
        <h4>Follow us on our social media!</h4>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer" >
              <i><FaInstagram /></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
              <i><FaFacebookSquare /></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        <p>© 2021 | Holidaze | All Rights Reserved</p>
        <p>Best deals xD</p>
      </div>
    </>
  );
}

export default Footer;