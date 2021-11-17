import "./App.css";
<<<<<<< HEAD
import { useState } from "react";
=======
import { useState } from "react"
>>>>>>> dev
import { Route, Link, Switch } from "react-router-dom";
import Router from "./config/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
<<<<<<< HEAD
  const [authN, setAuthN] = useState({
    groupName: null,
    token: null,
  });

  let authHeader = `bearer ${authN.token}`;
=======
  const [ authN, setAuthN ] = useState({
    groupName:null,
    token:null
  })

  let authHeader = `bearer ${authN.token}`
  
>>>>>>> dev

  return (
    <div className="App">
      <Header />
<<<<<<< HEAD
      <Router setAuthN={setAuthN} authN={authN} />
=======
      <Router setAuthN={setAuthN} />
>>>>>>> dev
      <Footer />
    </div>
  );
};

export default App;
