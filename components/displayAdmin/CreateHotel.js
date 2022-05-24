import { useState } from "react";
import { useForm } from "react-hook-form";
import { HOTELS_URL } from "../../constants/api";
import { CreateNewHotel } from "../schemas/yupSchemas";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";





const CreateHotel = () => {

    const [success, setSuccess] = useState("");

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(CreateNewHotel),
    });

    async function createHotel(data) {
      const options = {
        data: {
          name: data.name,
          price: data.price,
          rating: data.rating,
          image_url: data.image_url,
        },
      };

      console.log(data);
      try {
        const res = await axios.post(HOTELS_URL, options, {
          name: data.name,
          price: data.price,
          rating: data.rating,
          image_url: data.image_url,
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setSuccess("Your message is sent!");

        setTimeout(() => {
        window.location.reload();
        }, 2000);
      }
    }
      
  return (
    <form onSubmit={handleSubmit(createHotel)}>
    <input {...register("name")} />
    {errors.name && <p>{errors.name.message}</p>}
    <input {...register("price")} />
    {errors.price && <p>{errors.price.message}</p>}
    <input {...register("rating")} />
    {errors.rating && <p>{errors.rating.message}</p>}
    <input {...register("image_url")} />
    {errors.image_url && <p>{errors.image_url.message}</p>}

    <button>Submit</button>
    <p>{success}</p>
  </form>
 )
}

export default CreateHotel