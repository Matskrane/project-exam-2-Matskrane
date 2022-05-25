import { HOTELS_URL } from "../../utils/constants/api";
import axios from "axios";
import SearchBar from "../../components/searchBar/SearchBar";
import Head from "next/head";
import ContactForm from "../../components/forms/ContactForm";


const Contact = ({ hotels }) => {

  return (
    <>
    <Head>
      <title>Contact</title>
      <meta property='title' />
    </Head>    
    <SearchBar placeholder="Hotel name" hotels={hotels} />
    <ContactForm />
    </>
  );
}


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

export default Contact;