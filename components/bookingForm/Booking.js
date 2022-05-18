import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { bookingSchema } from '../schemas/yupSchemas';



const BookingsForm = ({ sendBooking}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
  });


  const onSubmit = (formData) => {
    console.log('Form Data: ', formData);

    sendBooking(formData).catch(console.error);
    alert('Your booking has been made!');
  };

  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input {...register('message')} placeholder='Message..' />
        {errors.message && <span>{errors.message.message}</span>}

        <input {...register('beds')} placeholder='Number of Beds..' />
        {errors.beds && <span>{errors.beds.message}</span>}

        <div className="date">
            CheckIn Date:
            <input type="date"{...register("date_checkin")}/>
        </div>
         <div className="date">
            CheckOut Date:
            <input type="date"{...register("date_checkout")}/>
        </div>


        <button>Send</button>
      </form>
    </>
  );
};

export default BookingsForm;

