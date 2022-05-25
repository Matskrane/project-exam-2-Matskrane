import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import Router from 'next/router';
import { AUTH_URL, BASE_URL } from '../../utils/constants/api';
import AuthContext from '../../components/context/AuthContext';
import { UserLoginSchema } from '../../components/schemas/yupSchemas';




const LoginForm = () => {

  const [auth, setAuth] = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(UserLoginSchema) });

  const userLogin = async (data) => {
    const response = await axios.post(BASE_URL + AUTH_URL, {
      identifier: data.email,
      password: data.password,
    });

    setAuth(response.data);

    Router.push("/admin");
  };

  const onSubmit = (data) => {
    userLogin(data).catch(console.error);
    console.log(auth);
  };

  return (
    <div className="login-border">
      <div className="login-container">
        <h1>Login for Admins</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

          <input {...register("email")} placeholder="Your email..." />
          {errors.email && <span>{errors.email.message}</span>}

          <input {...register("password")} type="password" placeholder="Your password..."/>
          {errors.password && <span>{errors.password.message}</span>}

          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm