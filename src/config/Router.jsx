import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import List from "../components/List";

const Router = (props) => {
<<<<<<< HEAD
  //token is stored at props.authN.token
=======
  
>>>>>>> dev
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login setAuthN={props.setAuthN} />} />
<<<<<<< HEAD
      <Route path="signup" element={<SignUp setAuthN={props.setAuthN} />} />
      <Route
        path="wishlist/:id"
        element={<List setAuthN={props.setAuthN} authN={props.authN} />}
      />
=======
      <Route path="signup" element={<SignUp />} />
      <Route path="wishlist/:id" element={<List />} />
>>>>>>> dev
    </Routes>
  );
};
export default Router;
