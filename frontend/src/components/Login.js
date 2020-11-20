import facade from "../facades/LoginFacade";
import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Jumbotron, Row, Col, Form } from "react-bootstrap";

function Login({ login, user }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      <h2>Sign-up</h2>
      <Form.Group controlId="formBasicEmail" onChange={onChange}>
        <Form.Label>Name</Form.Label>
        <Form.Control id="username" type="name" placeholder="Enter name" />
        <Form.Label>Password</Form.Label>
        <Form.Control
          id="password"
          type="Password"
          placeholder="Enter Password"
        />

        <button className="btn btn-primary m-2" onClick={performLogin}>
          login
        </button>
      </Form.Group>
      {user !== "Loading..." ? user : <> </>}
      <Link to="/signup">Sign-up</Link>
    </div>
  );
}

function LoggedIn({ user, setUser, setUserRole, setLoggedIn, userRole }) {
  useEffect(() => {
    setLoggedIn(true);
    try {
      facade
        .fetchUserRole("user")
        .then((data) => {
          setUserRole([...data.roles]);
          setUser(data.name);
        })
        .catch((err) => {});
      facade
        .fetchUserRole("admin")
        .then((data) => {
          setUserRole([...data.roles]);
          setUser(data.name);
        })
        .catch((err) => {});
    } catch (err) {
      setLoggedIn(false);
      console.log(err);
    }
  }, []);

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>Hello {user}</h3>
      <h3>
        Your role is{" "}
        {userRole.map((e) => (
          <> {e} </>
        ))}
      </h3>
    </div>
  );
}

function LoginDisplay({
  login,
  setUser,
  user,
  loggedIn,
  logout,
  setUserRole,
  userRole,
  setLoggedIn,
}) {
  return (
    <Row>
      <Col></Col>
      <Col>
        <Jumbotron className="mt-2 text-center">
          {!loggedIn ? (
            <Login login={login} user={user} />
          ) : (
            <div>
              <LoggedIn
                userRole={userRole}
                setUser={setUser}
                user={user}
                setUserRole={setUserRole}
                setLoggedIn={setLoggedIn}
              />
              <button className="btn btn-danger" onClick={logout}>Logout</button>
            </div>
          )}
        </Jumbotron>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default LoginDisplay;
