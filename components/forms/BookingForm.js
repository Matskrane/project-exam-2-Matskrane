import axios from "axios";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BOOKING_URL } from "../../utils/constants/api";
import { bookingSchema } from "../../components/schemas/yupSchemas";
import { useState } from "react";


const BookingForm = ({ hotels }) => {

    const { name } = hotels.attributes;
    
    const [success, setSuccess] = useState("");

    const sendBooking = async (data) => {
      const options = {
        data: {
          hotel: data.hotel,
          message: data.message,
          beds: data.beds,
          date_checkin: data.date_checkin,
          date_checkout: data.date_checkout,
        },
      };
      const responseData = await axios.post(BOOKING_URL, options);
      console.log(responseData);
    };

    const {
      register,
      setValue,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(bookingSchema),
    });
  
    const onSubmit = (data) => {
      console.log('Form Data: ', data);
  
      sendBooking(data).catch(console.error);
      setSuccess("Booking Successfull!");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    };
  return (
    <div className="booking-container">
    <h4>Booking Form</h4>
    <div className="booking-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="hotel-name"
          value={name}
          {...register("hotel")}
        />
        <textarea
          {...register("message")}
          placeholder="Please include your full name, email and phone number"
        />
        {errors.message && <span>{errors.message.message}</span>}
        <select
          {...register("beds")}
          onChange={(e) =>
            setValue("select", e.target.value, {
              shouldValidate: true,
            })
          }
        >
          <option value="">How many beds ?</option>
          <option value="one bed">One Bed</option>
          <option value="two beds">Two Beds</option>
          <option value="three beds">Three Beds</option>
        </select>
        {errors.beds && <span>{errors.beds.message}</span>}
        <div className="date-picker">
          <div>
            <p>CheckIn Date:</p>
            <input type="date" {...register("date_checkin")} />
            {errors.date_checkin && (
              <span>{errors.date_checkin.message}</span>
            )}
          </div>
          <div>
            <p>CheckOut Date:</p>
            <input type="date" {...register("date_checkout")} />
            {errors.date_checkout && (
              <span>{errors.date_checkout.message}</span>
            )}
          </div>
        </div>
        <button>Book Now</button>
        <p>{success}</p>
      </form>
    </div>
  </div>
  )
}

export default BookingForm