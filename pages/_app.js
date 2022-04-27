import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/footer';
import '../styles/style.scss';
import { AuthProvider } from '../components/context/AuthContext';
import SearchBar from '../components/searchBar/SearchBar';
import Hotels from './hotels';
import { getStaticProps } from './hotels';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <AuthProvider>
    <NavBar />
    <SearchBar placeholder="Enter Hotel Name.." data={getStaticProps} />
    <Component {...pageProps} />
    <Footer />
    </AuthProvider>
    </>
  )
}

export default MyApp
