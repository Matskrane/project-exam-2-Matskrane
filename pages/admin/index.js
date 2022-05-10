import { HOTELS_URL } from "../../constants/api";
import axios from "axios";

const Admin = () => {
  return (
    <div>Logged in</div>
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

export default Admin;