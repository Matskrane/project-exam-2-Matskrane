import axios from "axios";
import BookingsForm from "../../components/bookingForm/Booking";
import { BOOKING_URL, HOTELS_ID } from "../../constants/api";
import Head from 'next/head';


const Hotel = ({ hotels }) => {
    const { name, id, date_checkin, date_checkout } = hotels.attributes; 

    const sendBooking = async (formData) => {
      const options = {
        data: {
          message: formData.message,
          beds: formData.beds,
        },
      };
      const responseData = await axios.post(BOOKING_URL, options);
      console.log(responseData);
    };

    return (
      <>
      <Head>
        <title>{name}</title>
        <meta property='title' key={id} />
      </Head>


      <div className="specific-sauce">
        <h1>Name: {name}</h1>
      </div>

      <BookingsForm sendBooking={sendBooking} />
      </>
    );
  };




















  
export async function getStaticProps({ params }) {
  const url = `${HOTELS_ID}/${params.id}`

  let hotels = null;

  try {
    const response = await axios.get(url);
    hotels = response.data.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { hotels: hotels },
  };
    
}
  
export async function getStaticPaths() {
  try {
    const response = await axios.get(HOTELS_ID);

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