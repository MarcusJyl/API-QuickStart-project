import facade from "../apiFacade";
import React, { useState, useEffect } from "react";
import './Login.css'

function LogIn({ login }) {
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
      <h2>Login</h2>
      <form onChange={onChange} className="form__group">
        <div className="input">
          <input
            type="input"
            className="form__field"
            placeholder="Name"
            name="username"
            id="username"
            required
          />
        </div>
        <div className="input">
          <input
            type="input"
            className="form__field"
            placeholder="Password"
            name="password"
            id="password"
            required
          />
        </div>
        <button onClick={performLogin}>Login</button>
      </form>
    </div>
  );
}

function LoggedIn({ user, setUser }) {
  useEffect(() => {
    facade
      .fetchData("user")
      .then((data) => {
        setUser(data.msg);
      })
      .catch(err =>
        facade
          .fetchData("admin")
          .then((data) => {
            setUser(data.msg);
          })
          .catch(err => {})
      );
  }, []);

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{user}</h3>
    </div>
  );
}

function Login({ loggedIn, login, logout, user, setUser }) {
  return (
    <div className="login">
      {!loggedIn ? (
        <LogIn login={login} />
      ) : (
        <div>
          <LoggedIn
            setUser={setUser}
            user={user}
          />
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Login;
