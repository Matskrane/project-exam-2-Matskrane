import axios from "axios";
import { HOTELS_URL } from "../../utils/constants/api";
import Head from 'next/head';
import BookingForm from "../../components/forms/BookingForm";
import HotelCard from "../../components/hotelCards/HotelCard";


const Hotel = ({ hotels }) => {
    const { name, id } = hotels.attributes;
    
    return (
      <>
        <Head>
          <title>{name}</title>
          <meta property="title" key={id} />
        </Head>
        
        <HotelCard hotels={hotels} />
        <BookingForm hotels={hotels} />
      </>
    );
};

  
export async function getStaticProps({ params }) {
  const url = `${HOTELS_URL}/${params.id}`

  let hotels = null;

  try {
    const response = await axios.get(url);
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
  
export async function getStaticPaths() {
  try {
    const response = await axios.get(HOTELS_URL);

    const hotels = response.data.data;

    const paths = hotels.map((hotel) => ({
      params: { id: hotel.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}
  
export default Hotel;