import axios from "axios";
import { HOTELS_ID } from "../../constants/api";


const Hotel = ({ hotels }) => {
    const { name } = hotels.attributes; 
    return (
      <div className="specific-sauce">
        <h1>Name: {name}</h1>
      </div>
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