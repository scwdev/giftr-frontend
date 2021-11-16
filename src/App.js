import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Router from "./config/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
