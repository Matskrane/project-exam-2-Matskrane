import { HiWifi } from "react-icons/hi";
import { MdOutlineStar, MdQuickreply } from "react-icons/md";
import HeroBanner from "../components/heroBanner/HeroBanner";
import axios from 'axios';
import { HOTELS_URL } from "../utils/constants/api";
import SearchBar from "../components/searchBar/SearchBar";
import Head from "next/head";
import HotelCards from "../components/hotelCards/HotelCards";
import Header from "../utils/Header";



const Home = ({ hotels }) => {
  return (
    <>
    <Head>
      <title>Home</title>
      <meta property='title' />
    </Head>

      <SearchBar placeholder="Search Hotels" hotels={hotels} />
      <HeroBanner />

      <div className="section-one-icons">
        <div className="container-one">
          <h2>Why should you book with us ?</h2>
          <div className="flexbox-one">
            <div className="section-icons">
              <HiWifi />
              <p>Free Wi-Fi at all of our hotels</p>
            </div>
            <div className="section-icons">
              <MdOutlineStar />
              <p>Great reviews!</p>
            </div>
            <div className="section-icons">
              <MdQuickreply />
              <p>Quick customer service</p>
            </div>
          </div>
        </div>
      </div>

      <Header hotelHeader="Featured Hotels" />
      <HotelCards hotels={hotels} />
     
    </>
  );
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
    }
  };
}

export default Home;