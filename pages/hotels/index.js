import axios from "axios";
import Link from "next/link";
import SearchBar from "../../components/searchBar/SearchBar";
import {HOTELS_URL } from "../../constants/api";

const Hotels = ({ hotels }) => {
  return (
    <>
    <SearchBar placeholder="Hotel name" hotels={hotels}/>
    <div className="container">
      {hotels.map((hotel, idx) => {
        const { name } = hotel.attributes;
        const { id } = hotel;
        return ( 
        <Link key={idx} passHref href={`/hotels/${id}`}>
          <div>
            <h2>{name}</h2>
          </div>
        </Link>
        )
      })}
      
    </div>
    </>
  )
}

export async function getStaticProps() {
  
  let hotels = [];

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

export default Hotels;