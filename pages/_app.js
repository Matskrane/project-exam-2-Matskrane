import Footer from "../components/footer/Footer";
import '../styles/style.scss';
import { AuthProvider } from '../components/context/AuthContext';
import dynamic from 'next/dynamic';
import Head from "next/head";
const NavBar = dynamic(() => import ('../components/navbar/NavBar'), {
  ssr: false})



function MyApp({ Component, pageProps }) {

  return (
    <>
    <Head>
      <link href="/hotel-logo.jpg"  rel="icon"/>
    </Head>
    <AuthProvider>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
    </AuthProvider>
    </>
  )
  
}


export default MyApp

