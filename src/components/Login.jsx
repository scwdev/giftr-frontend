import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  // https://giftr-back.herokuapp.com/ back end link
  const [input, setInput] = useState({
    groupName: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(input);
  };

  const logIn = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const group = await fetch(
        "https://giftr-back.herokuapp.com/group/login",
        configs
      ); // check fetch url!!
      const parsedGroup = await group.json();
      console.log(parsedGroup);
      props.setAuthN({ groupName: input.groupName, ...parsedGroup.token });
      if (parsedGroup) {
        navigate(`/wishlist/${parsedGroup.group._id}`);
      } else {
        navigate(`/login`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Container>
        <Card>
          <h1>Login</h1>
          <Form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center"
          >
            <div className="w-50">
              <Form.Group className="">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="text"
                  id="groupName"
                  name="groupName"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  id="password"
                  type="password"
                  onChange={handleChange}
                />
                <br />
              </Form.Group>
              <Form.Control type="submit" />
              <br />
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
};
export default Login;
