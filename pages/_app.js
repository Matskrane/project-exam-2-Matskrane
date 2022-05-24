import Footer from '../components/footer/footer';
import '../styles/style.scss';
import { AuthProvider } from '../components/context/AuthContext';
import dynamic from 'next/dynamic';
import SSRProvider from 'react-bootstrap/SSRProvider';

const NavBar = dynamic(() => import ('../components/navbar/NavBar'), {
  ssr: false})



function MyApp({ Component, pageProps }) {

  return (
    <>
    <SSRProvider>
    <AuthProvider>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
    </AuthProvider>
    </SSRProvider>
    </>
  )
  
}


export default MyApp

