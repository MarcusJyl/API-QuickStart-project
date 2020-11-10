import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import facade from "./apiFacade";


function App() {
  const [user, setUser] = useState("Loading...");
  const [loggedIn, setLoggedIn] = useState();

  const login = (user, pass) => {
    facade
      .login(user, pass)
      .then((res) => setLoggedIn(true))
      .catch((err) => setUser(err.msg));
  };

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
          <Route path="/services" />
          <Route path="/products" />
          <Route path="/sign-up">
            <Login login={login}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
