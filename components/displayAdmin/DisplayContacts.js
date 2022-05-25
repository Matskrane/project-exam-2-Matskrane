import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { CONTACT_URL } from "../../utils/constants/api";
import useAxios from "../../hooks/UseAxios";


const DisplayContacts = () => {

  const [contacts, setContacts] = useState([]);
  const http = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      const displayContacts = await http.get(CONTACT_URL);
      setContacts(displayContacts.data.data);
    };
    fetchData()
  }, []);

  return (
    <div>
      <h3>Contact Messages</h3>
      {contacts.map((contact, idx) => {
        const { message, name, email } = contact.attributes;
        const deleteBooking = async () => {
          const data = await http.delete(`${CONTACT_URL}/${contact.id}`);
          console.log(data);
        };

        const handleDelete = () => {
          if (window.confirm("Are you sure?")) {
            deleteBooking();
            setTimeout(() => {
              window.location.reload();
            }, 0);
          } else {
            return;
          }
        };

        return (
          <div key={idx} className='card-admin'>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
                <Card.Text>{message}</Card.Text>
                <div className='button-delete'>
                  <button onClick={handleDelete}>Remove</button>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayContacts