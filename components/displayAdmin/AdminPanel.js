import { Tab, Tabs } from "react-bootstrap";
import CreateHotel from "./CreateHotel";
import DisplayBookings from "./DisplayBookings";
import DisplayContacts from "./DisplayContacts";



const AdminPanel = () => {
  return (
    <div className="container-tabs">
      <div className="admin-tabs">
        <Tabs
          defaultActiveKey="bookings"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab  eventKey="bookings" title="Bookings">
            <DisplayBookings />
          </Tab>
          <Tab eventKey="contact" title="Contact Messages">
            <DisplayContacts />
          </Tab>
          <Tab eventKey="hotel" title="Create Hotel">
            <CreateHotel />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default AdminPanel