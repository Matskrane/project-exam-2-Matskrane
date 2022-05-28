import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import Header from "../utils/Header";

// had to make this a function to prevent hydration error
const Test = () => {
    const [auth] = useContext(AuthContext);
    if (!auth) {
        return (
          <Header header={"Not Authenticated, Please login first."} />
        )
      }
}

export default Test