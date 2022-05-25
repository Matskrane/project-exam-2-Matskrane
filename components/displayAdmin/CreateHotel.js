import { useState } from "react";
import { useForm } from "react-hook-form";
import { HOTELS_URL } from "../../constants/api";
import { CreateNewHotel } from "../schemas/yupSchemas";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { Dropdown } from "react-bootstrap";



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
          adress: data.adress,
        },
      };

      try {
        const res = await axios.post(HOTELS_URL, options, {
          name: data.name,
          price: data.price,
          rating: data.rating,
          image_url: data.image_url,
          adress: data.adress,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setSuccess("Hotel created!");

        setTimeout(() => {
        window.location.reload();
        }, 2000);
      }
    }
      
  return (
    <div className="create-hotel-form">
      <form onSubmit={handleSubmit(createHotel)}>
        <input placeholder="Name of Hotel" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
        <input placeholder="Starting Price" {...register("price")} />
        {errors.price && <p>{errors.price.message}</p>}
        <input placeholder="Rating" {...register("rating")} />
        {errors.rating && <p>{errors.rating.message}</p>}
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            How does image url work ? 
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <p>
              The image must be from Hotels.com <br></br>
              Right click on the image and copy the link adress{" "}
            </p>
          </Dropdown.Menu>
        </Dropdown>
        <input placeholder="Image URL" {...register("image_url")} />
        {errors.image_url && <p>{errors.image_url.message}</p>}
        <input placeholder="Hotel Adress" {...register("adress")} />
        {errors.adress && <p>{errors.adress.message}</p>}

        <button>Submit</button>
        <p>{success}</p>
      </form>
    </div>
  );
}

export default CreateHotel