import axios from "axios";
import SearchBar from "../../components/searchBar/SearchBar";
import {HOTELS_URL } from "../../constants/api";

import Head from "next/head";
import HotelCards from "../../components/hotelCards/HotelCards";

const Hotels = ({ hotels }) => {
  return (
    <>
      <Head>
        <title>Hotels</title>
        <meta property="title" />
      </Head>
      <SearchBar placeholder="Hotel name" hotels={hotels} />
      <HotelCards hotels={hotels} />
    </>
  );
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