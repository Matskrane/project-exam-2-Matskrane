import Footer from '../components/footer/footer';
import '../styles/style.scss';
import { AuthProvider } from '../components/context/AuthContext';

import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import ('../components/navbar/NavBar'), {
  ssr: false})



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

