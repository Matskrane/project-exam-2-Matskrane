import { useEffect, useState } from 'react';
import { BOOKING_URL } from '../../constants/api';
import useAxios from "../../hooks/UseAxios";


const DisplayBookings = () => {

  const [bookings, setBookings] = useState([]);
  const http = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      const data = await http.get(BOOKING_URL);
      setBookings(data.data.data);
    };
    fetchData()
  }, []);


  return (
    <div>
      <h3>Booking Applications</h3>
      {bookings.map((booking, idx) => {
        const { message, name, beds } = booking.attributes;
        const deleteBooking = async () => {
          const data = await http.delete(`${BOOKING_URL}/${booking.id}`);
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
          <div key={idx}>
            <h4>{name}</h4> 
            <h5>{beds}</h5>
            <p>{message}</p>
            <button onClick={handleDelete}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayBookings
