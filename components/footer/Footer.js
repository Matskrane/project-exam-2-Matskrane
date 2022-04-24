

const Footer = () => {
  return (
    <>
    <div class="footer">
        <div class="container-one">
            <div class="about">
                <h3>
                    <span>About us</span>
                </h3>
                <p>We strive to sell the best preworkouts on the market and be competetive with price if not the best!</p>
            </div>

            <div class="pages">
                <h3>
                    <span>Pages</span>
                </h3>    
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="products.html">Products</a></li>
                        <li><a href="shoppingCart.html">My Shopping Cart</a></li>
                        <li><a href="login.html">Login</a></li>                      
                    </ul>
            </div>

            


        </div>
    </div>

    <div class="socials">
        <h4>Follow us on our social media!</h4>
        <ul>
            <li>
                <a href="https://www.facebook.com/mats.liankrane">
                    <i class="fa fa-facebook"></i>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/matskrane/">
                    <i class="fa fa-instagram"></i>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/channel/UC3hRmO1Pm3PTbf38-_8cmtA">
                    <i class="fa fa-youtube"></i>
                </a>
            </li>
        </ul>
    </div>

    <div class="copyright">
        <p>© 2021 | Preworkout | All Rights Reserved</p>
        <p>Swole is the goal, size is the price</p>
    </div>
    </>
  )
}

export default Footer;