import { HOTELS_URL } from "../../constants/api";
import axios from "axios";
import AuthContext from "../../components/context/AuthContext";
import Head from "next/head";
import SearchBar from "../../components/searchBar/SearchBar";
import DisplayContacts from "../../components/displayAdmin/DisplayContacts";
import DisplayBookings from "../../components/displayAdmin/DisplayBookings";
import { useContext } from "react";
import { Tabs, Tab } from "react-bootstrap";
import CreateHotel from "../../components/displayAdmin/CreateHotel";



const Admin = ({ hotels }) => {
  
  const [auth] = useContext(AuthContext);

  if (!auth) {
    return (
      <h1>You need to be logged in to view this page</h1>
    )
  }

 
  return (
    <>
      <Head>
        <title>Admin</title>
        <meta property="title" />
      </Head>
      <SearchBar hotels={hotels} />

      <h1 className="welcome-admin">Welcome Admin</h1>
      <div className="container-tabs">
      <div className="admin-tabs">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Bookings">
          <DisplayBookings />
        </Tab>
        <Tab eventKey="profile" title="Contact Messages">
          <DisplayContacts />
        </Tab>
        <Tab eventKey="contact" title="Create Hotel">
          <CreateHotel auth={auth}/>
        </Tab>
      </Tabs>
      </div>
      </div>
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
