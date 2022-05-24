import axios from "axios";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BOOKING_URL, HOTELS_ID } from "../../constants/api";
import Head from 'next/head';
import { bookingSchema } from "../../components/schemas/yupSchemas";
import { useState } from "react";
import Image from 'next/image';
import SearchBar from "../../components/searchBar/SearchBar";


const Hotel = ({ hotels }) => {
    const { name, id, image_url, price, rating, adress } = hotels.attributes;
    
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
      <>
        <Head>
          <title>{name}</title>
          <meta property="title" key={id} />
        </Head>

          <div className="hotel-flex">
            <div className="hotel-left-side">
            <Image width={500} height={450} src={image_url} />
            </div>

            <div className="hotel-right-side">
              <h1>{name}</h1>
              <p>
              Hotel Norge by Scandic is located in central Bergen, just next to Byparken city park. Guests will find 3 floors of bars, lounge areas and restaurants.
              </p>
              <div className="hotel-price">
              <span>Price starting at {price} Kr</span>
              </div>
              <div className="hotel-rating">
              <span>{rating}</span>
              </div>
              <div className="hotel-adress">
              <span>{adress}</span>
              </div>
            </div>          
          </div>

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
      </>
    );
};

  
export async function getStaticProps({ params }) {
  const url = `${HOTELS_ID}/${params.id}`

  let hotels = null;

  try {
    const response = await axios.get(url);
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
  
export async function getStaticPaths() {
  try {
    const response = await axios.get(HOTELS_ID);

    const hotels = response.data.data;

    const paths = hotels.map((hotel) => ({
      params: { id: hotel.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}
  
export default Hotel;