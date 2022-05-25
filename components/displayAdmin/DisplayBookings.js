import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
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
        const { message, hotel, beds, date_checkin, date_checkout } = booking.attributes;
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
          <div className='card-admin'>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{hotel}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Check in: {date_checkin}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Check out: {date_checkout}
                </Card.Subtitle>
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

export default DisplayBookings
