import * as yup from 'yup';

export const UserLoginSchema = yup.object().shape({  
  email: yup.string().required('Please enter an email address').email('Please enter a valid email address'),
  password: yup.string().required('Please enter your password'),
});



export const Contact_Schema = yup.object().shape({
  name: yup.string().required("Please enter your name.").min(3, `Must be at least 3 characters.`),
  email: yup.string().required("Please enter your email address.").email("Please enter a valid email address."),
  message: yup.string().required("Enter your message").min(10, "The message must be at least 10 characters"),
});


export const bookingSchema = yup.object().shape({
  message: yup.string().required('Please provide a message'),
  beds: yup
    .string()
    .required('Please provide an email so we can contact you'),
});