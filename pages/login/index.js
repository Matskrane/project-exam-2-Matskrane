import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import Router from 'next/router';
import { UserLoginSchema } from '../../components/schemas/LoginSchema';
import { AUTH_URL, BASE_URL } from '../../constants/api';
import AuthContext from '../../components/context/AuthContext';
import { HOTELS_URL } from "../../constants/api";



const Login = () => {
  
  const [auth, setAuth] = useContext(AuthContext);

  const {register,handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(UserLoginSchema),
  });

  const userLogin = async (formData) => {
    const responseData = await axios.post(BASE_URL + AUTH_URL, {
      identifier: formData.email,
      password: formData.password,
    });

    setAuth(responseData.data);

    Router.push("/admin");
  };

  const onSubmit = (formData) => {
    // console.log('Form Data: ', formData);
    userLogin(formData).catch(console.error);
    console.log(auth);
  };

  return (
    <>
    <h1>Login for Admins</h1>
    <p>If you are an Admin you can log in here to view messages and create new establishments </p>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input {...register('email')} placeholder='Your email...' />
        {errors.email && <span>{errors.email.message}</span>}
        <input
          {...register('password')}
          type='password'
          placeholder='Your password...'
        />
        {errors.password && <span>{errors.password.message}</span>}
        <button>Send</button>

      </form>
    </>
  );
};

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

export default Login;