import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import facade from "./facades/LoginFacade";
import { Jokes, Signup, Login, Home } from "./components";

import { parseJwt } from "./facades/token";

function App() {
  const init = {username: "", roles: []}
  const [user, setUser] = useState(init);

  const login = (user, pass) => {
    facade
      .login(user, pass)
      .then((res) => {
        setUser({...getUserByJwt()})
      })
      .catch((err) => {
        if (err.status) {
          err.fullError.then((e) => {
            setUser(e.message);
          });
        } else {
          console.log("Network error");
        }
      });
  };

  function getUserByJwt(){
    if (facade.getToken()) {
      const tokenUser = parseJwt(facade.getToken());
      const tempUser = {username: tokenUser.username, roles: [...tokenUser.roles.split(",")]}

      return tempUser
    }
  }

  const logout = () => {
    facade.logout();
    setUser(init);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Container fluid>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/jokes">
              <Jokes />
            </Route>
            <Route path="/products" />
            <Route path="/signin">
              <Login
                login={login}
                user={user}
                logout={logout}
              />
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
          </Container>
        </Switch>
      </Router>
    </>
  );
}

export default App;
