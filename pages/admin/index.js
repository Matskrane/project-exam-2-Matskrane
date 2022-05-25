import { HOTELS_URL } from "../../constants/api";
import axios from "axios";
import AuthContext from "../../components/context/AuthContext";
import Head from "next/head";
import { useContext } from "react";

// This is to prevent Hydration error
import dynamic from 'next/dynamic';
const Test = dynamic(() => import ("../../components/Test"), {
  ssr: false})
const SearchBar = dynamic(() => import ("../../components/searchBar/SearchBar"), {
  ssr: false})
const Header = dynamic(() => import ("../../components/Header"), {
  ssr: false})
const AdminPanel = dynamic(() => import ("../../components/displayAdmin/AdminPanel"), {
  ssr: false})


const Admin = ({ hotels }) => {
  
  const [auth] = useContext(AuthContext);

  if (!auth) {
    return   <Test />
  }
 
  return (
    <>
      <Head>
        <title>Admin</title>
        <meta property="title" />
      </Head>
      <SearchBar hotels={hotels} />
      <Header title={"Welcome Admin"}/>
      <AdminPanel />

    </>
  );
};


// using to get data to the Search Bar

export async function getStaticProps() {
  
  let hotels = []

  try {
    const response = await axios.get(HOTELS_URL);
    hotels = response.data.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      hotels: hotels,
    }
  };
}

export default Admin;
