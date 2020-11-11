import token, { makeOptions, handleHttpErrors } from "./fetchUtils";
import { loginURL as URL } from "./settings";

function apiFacade() {
  const setToken = (token) => token.setToken(token)
  const getToken = () => token.getToken();
  const loggedIn = () => token.loggedIn();
  const logout = () => token.logout();

  const login = (user, password) => {
    const options = makeOptions("POST", true, {
      username: user,
      password: password,
    });
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)
      .then((res) => {
        token.setToken(res.token);
      });
  };

  const fetchUserRole = (user) => {
    const options = makeOptions("GET", true); 
    return fetch(URL + "/api/info/" + user, options).then(handleHttpErrors);
  };

  return {
    login,
    fetchUserRole,
    setToken,
    getToken,
    loggedIn,
    logout,
  };
}
const facade = apiFacade();
export default facade;
