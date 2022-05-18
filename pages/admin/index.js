import { BOOKING_URL, HOTELS_URL } from "../../constants/api";
import axios from "axios";
import { useEffect, useState, useContext } from 'react';
import useAxios from "../../hooks/UseAxios";
import useToggle from "../../hooks/UseToggle";
import AuthContext from "../../components/context/AuthContext";
import Head from "next/head";


const Admin = () => {

  const [isTriggered, setIsTriggered] = useToggle();
  const [error, setError] = useState();
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [auth] = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await useAxios.get(BOOKING_URL);
      setBookings(data.data.data);
      setIsLoading(false);
    };

    fetchData().catch((error) => setError(error.response.data.error));
  }, [isTriggered, auth]);

  const sendBooking = async (formData) => {
    const options = {
      data: {
        title: formData.title,
        message: formData.message,
        contact: formData.contact,
      },
    };
    const responseData = await http.post(BOOKING_URL, options);
    console.log(responseData);
    setIsTriggered();
  };

  // if error object is populated, show user what happened and urge them to login
  if (error) {
    return (
      <div>
        <h1>You must be Authenticated to view this page</h1>
        <h3>The server responded with: {error.status}</h3>
        <p>{error.message}</p>
        <p>Please Login</p>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Head>
    <title>Admin</title>
    <meta property='title' />
    </Head>

    <div>Logged in</div>
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

export default Admin;