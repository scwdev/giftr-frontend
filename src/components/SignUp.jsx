import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";

const SignUp = (props) => {
/////////////////////////////////


// onSubmit = (event) => {
//   event.preventDefault();
//   axios.post(`${process.env.REACT_APP_SERVER_URL}/signup`, {
//       username: this.state.username,
//       password: this.state.password
//     })
//     .then((response) => {
//       // console.log(response)
//       this.props.history.push('/articles')
//       console.log(this.props);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };
// handleUsernameChange = (event) => {
// this.setState({ username: event.target.value });
// };
// handlePasswordChange = (event) => {
// this.setState({ password: event.target.value });
// };


  ///////////////////////////////
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
      signUp(input);
    };
    // not yet working log in. just threw in skeleton looks like back end needs to be updated to accept a /login route. - jm
    const signUp = async (data) => {
      try {
        const configs = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const loggedIn = await fetch(
          "https://giftr-back.herokuapp.com/signup",
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
          <h1>Sign Up</h1>
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
