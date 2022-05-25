import * as yup from 'yup';

export const UserLoginSchema = yup.object().shape({  
  email: yup.string().required('Please enter an email address').email('Please enter a valid email address'),
  password: yup.string().required('Please enter your password'),
});



export const Contact_Schema = yup.object().shape({
  name: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').required("Please enter your name.").min(3, `Must be at least 3 characters.`),
  email: yup.string().required("Please enter your email address.").email("Please enter a valid email address."),
  message: yup.string().required("Enter your message").min(10, "The message must be at least 10 characters"),
});



export const bookingSchema = yup.object().shape({
  message: yup.string().required('Please provide a message'),
  beds: yup.string().required('Please select beds'),
  date_checkin: yup.string().required('Please select date'),
  date_checkout: yup.string().required('Please select date'),
});


export const CreateNewHotel = yup.object().shape ({
  name: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').required("Don't forget to add your hotel name"), 
  image_url: yup.string().matches(/(\exp.cdn-hotels.com)/, 'The Url must be from Hotels.com').required(), 
  price: yup.number().required(), 
  rating: yup.string().required(),
  adress: yup.string().required(),
})