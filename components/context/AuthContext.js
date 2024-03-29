import { createContext } from 'react';
import { UseLocalStorage } from "../../hooks/UseLocalStorage";
import PropTypes from "prop-types";

const AuthContext = createContext([null, () => {}]);

export const AuthProvider = (props) => {
  const [auth, setAuth] = UseLocalStorage('jwt', null);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthContext;