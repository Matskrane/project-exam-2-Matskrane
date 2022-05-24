import { useEffect, useState } from 'react';
import { CONTACT_URL } from "../../constants/api";
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
        const { message } = contact.attributes;
            const deleteBooking = async () => {
              const data = await http.delete(
                `${CONTACT_URL}/${contact.id}`
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
      </div>
  )
}

export default DisplayContacts