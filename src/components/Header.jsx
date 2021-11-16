import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";

const Header = (props) => {
  return (
    <div>
      <span className="navbar">
        <Link link to="/login" className="">
          Login
        </Link>
        <Link link to="/signup" className="">
          Sign Up
        </Link>
        <Link link to="/logout" className="">
          Log Out
        </Link>
        <Link link to="/about" className="">
          About
        </Link>
      </span>
    </div>
  );
};
export default Header;
