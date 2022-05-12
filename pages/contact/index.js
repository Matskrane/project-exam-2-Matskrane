
import { CONTACT_URL, HOTELS_URL } from "../../constants/api";
import axios from "axios";
import SearchBar from "../../components/searchBar/SearchBar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";
import { Contact_Schema } from "../../components/schemas/LoginSchema";



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

      <form onSubmit={handleSubmit(sendForm)} >
        

              <div>
                <textarea name="message" {...register("message")}  placeholder="Enter your message"></textarea>
                {errors.message && <span>{errors.message.message}</span>}
              </div>

              <button>Send Form</button>
              <div></div>
              <div>
                <p> {success} </p>
              </div>
            </form>
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