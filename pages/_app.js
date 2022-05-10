import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/footer';
import '../styles/style.scss';
import { AuthProvider } from '../components/context/AuthContext';












function MyApp({ Component, pageProps }) {

  return (
    <>
    <AuthProvider>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
    </AuthProvider>
    </>
  )
  
}


export default MyApp

