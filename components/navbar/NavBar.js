import Link from 'next/link';
import Router  from 'next/router';
import { useContext } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';
import Image from "next/image";


const NavBar = () => {
  const [ auth, setAuth ] = useContext(AuthContext)

  function logout() {
    setAuth(null);
    Router.push("/");
  }

  return (
    <>
      <Navbar className='navbar-dark'  collapseOnSelect expand="lg">
        <Container>
          <div className='logo-image'>
          <Image alt='logo' src="/hotel-logo.jpg" layout="fill" objectFit="cover"></Image>
          </div>
          <Navbar.Brand href='/'>Holidaze</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link
              
              href='/'>Home</Link>
              <Link
               href="/hotels">Hotels</Link>
              <Link href='/contact'>Contact</Link>

              {auth ? (
                <>
                <Link href="/admin">Admin</Link>
                <button className='logout-button' onClick={logout}>Log out</button>
                </>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};


export default NavBar;