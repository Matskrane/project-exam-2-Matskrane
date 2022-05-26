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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud.
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
              <Link href="/admin">Admin</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="socials">
        <h4>Follow us on our social media!</h4>
        <ul>
          <li>
            <a href="https://www.facebook.com/mats.liankrane">
              <i><FaInstagram /></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/matskrane/">
              <i><FaFacebookSquare /></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        <p>© 2021 | Holidaize | All Rights Reserved</p>
        <p>Best deals xD</p>
      </div>
    </>
  );
}

export default Footer;