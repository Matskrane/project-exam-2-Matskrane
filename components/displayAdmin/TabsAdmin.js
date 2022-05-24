import { Tab, Tabs } from "react-bootstrap";
import CreateHotel from "./CreateHotel";
import DisplayBookings from "./DisplayBookings";
import DisplayContacts from "./DisplayContacts";



const TabsAdmin = () => {
  return (
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
            <CreateHotel />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default TabsAdmin