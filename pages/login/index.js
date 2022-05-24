import axios from 'axios';
import { HOTELS_URL } from "../../constants/api";
import SearchBar from '../../components/searchBar/SearchBar';
import Head from "next/head";
import LoginForm from '../../components/forms/LoginForm';


const Login = ({ hotels }) => {
  
  return (
    <>
      <Head>
        <title>Login</title>
        <meta property="title" />
      </Head>
      <SearchBar placeholder="Hotel name" hotels={hotels} />
      <LoginForm />
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
    },
  };
}

export default Login;