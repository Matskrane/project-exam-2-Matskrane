
import { CONTACT_URL, HOTELS_URL } from "../../constants/api";
import axios from "axios";
import SearchBar from "../../components/searchBar/SearchBar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { CONTACT_SCHEMA } from "../../components/schemas/LoginSchema";


const Contact = ({ hotels }) => {

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CONTACT_SCHEMA),
  });

  async function onSubmit() {
    setSubmitting(true);
    setError(null);

    try {
      const response = await axios.post(CONTACT_URL);
      console.log(response)
      setSubmitting(false);
      setSent(true);
    } catch (error) {
      setError(error.toString());
    }
  }
  return (
    <>
      <SearchBar placeholder="Hotel name" hotels={hotels} />

      <form onSubmit={handleSubmit(onSubmit)}>

        <input type="text" placeholder="Name *" {...register("name")} />
        {errors.name && <error>{errors.name.message}</error>}

        <input type="email" placeholder="Email *" {...register("email")} />
        {errors.email && <error>{errors.email.message}</error>}

        <textarea
          as="textarea"
          placeholder="Message *"
          rows={3}
          {...register("message")}
        />
        {errors.message && <error>{errors.message.message}</error>}

        
        {sent && <p>Thank you for your message</p>}
        <button
          type="submit"
          disabled={(error && true) || (sent && true) || false}
          
          
        >
          {(sent && "Sent") ||
            (error && "Error") ||
            (submitting && "Sending..") ||
            "Send"}
        </button>
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