
import { CONTACT_URL, HOTELS_URL } from "../../constants/api";
import axios from "axios";
import SearchBar from "../../components/searchBar/SearchBar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Contact_Schema } from "../../components/schemas/yupSchemas";



const Contact = ({ hotels }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Contact_Schema),
  });


  const [success, setSuccess] = useState("");

  async function sendForm(data) {
    event.preventDefault();
    const options = {
      data: {
        message: data.message,
      },
    };

    console.log(data);

    

    try {
      const res = await axios.post(CONTACT_URL, options, {      
        name: data.name,
        email: data.email, 
        message: data.message,
      });
      console.log(data)
    } catch (error) {
      console.log(error);
    } finally {
      setSuccess("Your message is sent!");

      //setTimeout(() => {
      //  window.location.reload();
      //}, 2000);
    }
  }

  return (
    <>
      <SearchBar placeholder="Hotel name" hotels={hotels} />


      <div className='login-border'>
      <div className='login-container'>
      <h1>Contact</h1>
      <p>If you have any questions feel free to contact us here</p>
      <form onSubmit={handleSubmit(sendForm)} >

                <input type="text" {...register("name")} placeholder="Full Name" />
                {errors.name && <span className>{errors.name.message}</span>}
                <input type="text" {...register("email")} placeholder="Your Email" />
                {errors.email && <span>{errors.email.message}</span>}
                <textarea name="message" {...register("message")}  placeholder="Enter your message"></textarea>
                {errors.message && <span>{errors.message.message}</span>}

              <button>Send Form</button>
              <div></div>
              <div>
                <p> {success} </p>
              </div>
            </form>
            </div>
            </div>
    </>
  );
}















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
    },
  };
}

export default Contact;