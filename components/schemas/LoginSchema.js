import * as yup from 'yup';

export const UserLoginSchema = yup.object().shape({  
  email: yup.string().required('Please enter an email address').email('Please enter a valid email address'),
  password: yup.string().required('Please enter your password'),
});



export const Contact_Schema = yup.object().shape({
  message: yup.string().required("Enter your message").min(10, "The message must be at least 10 characters"),
});