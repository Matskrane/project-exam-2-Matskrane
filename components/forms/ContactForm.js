import { CONTACT_URL } from "../../utils/constants/api";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Contact_Schema } from "../../components/schemas/yupSchemas";


const ContactForm = () => {

    const [success, setSuccess] = useState("");

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(Contact_Schema),
    });

    const sendForm = async (data) => {
      const options = {
        data: {
          name: data.name,
          email: data.email,
          message: data.message,
        },
      };
      const responseData = await axios.post(CONTACT_URL, options);
      console.log(responseData);
    };

    const onSubmit = (data) => {
      sendForm(data).catch(console.error);
      setSuccess("Message Sent!");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    };

    return (
      <>
        <div className="login-border">
          <div className="login-container">
            <h1>Contact</h1>
            <p>If you have any questions feel free to contact us here</p>
            <form onSubmit={handleSubmit(onSubmit)}>

              <input type="text" {...register("name")} placeholder="Full Name" />
              {errors.name && <span className>{errors.name.message}</span>}

              <input type="text" {...register("email")} placeholder="Your Email" />
              {errors.email && <span>{errors.email.message}</span>}
              
              <textarea name="message" {...register("message")} placeholder="Enter your message" />
              {errors.message && <span>{errors.message.message}</span>}

              <button>Send Message</button>
              <div>
                <p> {success} </p>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}

export default ContactForm