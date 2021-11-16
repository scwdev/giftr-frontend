import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import List from "../components/List";

const Router = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="wishlist/:id" element={<List />} />
    </Routes>
  );
};
export default Router;
