import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import Header from "../utils/Header";


const Test = () => {
    const [auth] = useContext(AuthContext);
    if (!auth) {
        return (
          <Header header={"Not Authenticated, Please login first."} />
        )
      }
}

export default Test