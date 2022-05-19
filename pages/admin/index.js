import { BOOKING_URL, CONTACT_URL, HOTELS_URL } from "../../constants/api";
import axios from "axios";
import { useEffect, useState, useContext } from 'react';
import useAxios from "../../hooks/UseAxios";
import AuthContext from "../../components/context/AuthContext";
import Head from "next/head";
import SearchBar from "../../components/searchBar/SearchBar";
import Link from "next/link";


const Admin = ({ hotels }) => {
  
  const [bookings, setBookings] = useState([]);
  //const [contacts, setContacts] = useState([]);
  const [auth] = useContext(AuthContext);
  const http = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      const data = await http.get(BOOKING_URL);
      //const contacts = await http.get(CONTACT_URL);
      setBookings(data.data.data);
      //setContacts(contacts.data.data);
    };

    fetchData()
  }, [auth]);


  if (!auth) {
    return (
        <h1>You must be Logged in to view this page</h1>
    );
  }

 
  return (
    <>
    <Head>
    <title>Admin</title>
    <meta property='title' />
    </Head>
    <SearchBar hotels={hotels} />

    <h1>Welcome Admin</h1>

    {bookings.map((booking, idx) => {
      const { message } = booking.attributes;
          const deleteBooking = async () => {
            const data = await http.delete(
              `${BOOKING_URL}/${booking.id}`
            );
            console.log(data);
          };

          const handleDelete = () => {
            if (window.confirm('Are you sure?')) {
              deleteBooking();
              setTimeout(() => {
                window.location.reload();
              }, 0);
            } else {
              return;
            }
          };
          
          return (
            <div key={idx}>
            <p>{message}</p>
            <button onClick={handleDelete}>Delete</button>
            </div>
          );
    })}
    </>
  );
};


export default Admin;



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

