import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import LoginComp from "../../../components/UserRegistration/LogIn";
import AuthContext from "../../../context/AuthContext";

function Login() {
  const history = useHistory();
  const { getLoggedIn } = useContext(AuthContext);

  async function setLogin(loginData) {
    try {
      //await axios.post("http://localhost:8000/auth/login", loginData);
      //await axios.post("https://watch2gether-back-end-dev.herokuapp.com/auth/login", loginData);
      await axios.post("https://watch2gether-duplicate-back-h.herokuapp.com/auth/login", loginData);
      await getLoggedIn();
      history.push("/home");
    } catch (err) {
      console.error(err.response);
    }
  }

  return <LoginComp setLogin={setLogin} />;
}

export default Login;
