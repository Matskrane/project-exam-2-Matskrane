
import NavBar from '../components/navbar/NavBar';
import '../styles/style.scss';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavBar />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
