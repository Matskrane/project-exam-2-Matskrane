
import { HOTELS_URL } from "../../constants/api";
import axios from "axios";
import SearchBar from "../../components/searchBar/SearchBar";


const Contact = ({ hotels }) => {
  return (   
    <>
    <SearchBar placeholder="Hotel name" hotels={hotels}/>
    <div>Contact</div>
    
    </>
  )
}

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

export default Contact;