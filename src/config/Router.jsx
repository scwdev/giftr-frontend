import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const Router = (props) => {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login setAuthN={props.setAuthN} />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};
export default Router;
