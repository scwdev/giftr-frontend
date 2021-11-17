import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import List from "../components/List";

const Router = (props) => {
  //token is stored at props.authN.token
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login setAuthN={props.setAuthN} />} />
      <Route path="signup" element={<SignUp setAuthN={props.setAuthN} />} />
      <Route
        path="wishlist/:id"
        element={<List setAuthN={props.setAuthN} authN={props.authN} />}
      />
    </Routes>
  );
};
export default Router;
