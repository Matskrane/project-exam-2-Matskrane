import { useContext } from "react";
import AuthContext from "./context/AuthContext";


const Test = () => {
    const [auth] = useContext(AuthContext);
    if (!auth) {
        return (
          <h1>You need to be logged in to view this page</h1>
        )
      }
}

export default Test