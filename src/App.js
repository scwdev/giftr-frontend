import "./App.css";
import { useState } from "react"
import { Route, Link, Switch } from "react-router-dom";
import Router from "./config/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [ authN, setAuthN ] = useState({
    groupName:null,
    token:null
  })

  let authHeader = `bearer ${authN.token}`
  

  return (
    <div className="App">
      <Header />
      <Router setAuthN={setAuthN} />
      <Footer />
    </div>
  );
};

export default App;
