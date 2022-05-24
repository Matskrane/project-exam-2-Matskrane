import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import Header from "./Header";


const Test = () => {
    const [auth] = useContext(AuthContext);
    if (!auth) {
        return (
          <Header title={"Not Authenticated, Please login first."} />
        )
      }
}

export default Test