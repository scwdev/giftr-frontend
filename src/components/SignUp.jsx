import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";

const SignUp = (props) => {
  // https://giftr-back.herokuapp.com/ back end link
  const url = "https://giftr-back.herokuapp.com";
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
    signUp(input);
  };

  const signUp = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const createdUser = await fetch(
        "https://giftr-back.herokuapp.com/group/signup",
        configs
      ); // check fetch url!!
      const parsedUser = await createdUser.json();
      console.log(parsedUser);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Container>
        <Card>
          <h1>Sign Up</h1>
          <Form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center"
          >
            <div className="w-50">
              <Form.Group className="">
                <Form.Label>Family Name:</Form.Label>
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
export default SignUp;
