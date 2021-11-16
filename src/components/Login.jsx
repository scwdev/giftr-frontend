import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";

const Login = (props) => {
  // https://giftr-back.herokuapp.com/ back end link
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(input);
  };
  // not yet working log in. just threw in skeleton looks like back end needs to be updated to accept a /login route. - jm
  const logIn = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const loggedIn = await fetch(
        "https://giftr-back.herokuapp.com/login",
        configs
      ); // check fetch url!!
      const parsedLogIn = await loggedIn.json();
      console.log(parsedLogIn);
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
                  id="username"
                  name="username"
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
              </Form.Group>
              <Form.Control type="submit" />
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
};
export default Login;
