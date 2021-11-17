import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";

const Header = (props) => {
  return (
    <div>
      <div className="header">
        <span className="inlineheader">
          <span className="headerlinks">
            <Link to="/login" className="link">Login</Link>
            &nbsp;&nbsp;
            <Link to="/signup" className="link">SignUp</Link>
            &nbsp;&nbsp;
            <Link to="/logout" className="link">LogOut</Link>
            &nbsp;&nbsp;
            <Link to="/about" className="link">About</Link>
        </span>
      </span>
    </div>
  </div>
  );
};
export default Header;
