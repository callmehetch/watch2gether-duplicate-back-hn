import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import RegisterComp from "../../../components/UserRegistration/Register";
import AuthContext from "../../../context/AuthContext";

function Register() {
  const history = useHistory();
  const { getLoggedIn } = useContext(AuthContext);

  async function setRegister(registerData) {
    try {
      //await axios.post("http://localhost:8000/auth/", registerData);
      //await axios.post("https://watch2gether-back-end-dev.herokuapp.com/auth/", registerData);
      await axios.post("https://watch2gether-duplicate-back-h.herokuapp.com/auth/", registerData);
      await getLoggedIn();
      history.push("/login");
    } catch (err) {
      console.error(err.response);
    }
  }

  return <RegisterComp setRegister={setRegister} />;
}

export default Register;
