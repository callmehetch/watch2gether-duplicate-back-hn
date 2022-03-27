import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./containers/UserRegistration/LogIn/index";
import Register from "./containers/UserRegistration/Register/index";
import AuthContext from "./context/AuthContext";
import Grid from "@mui/material/Grid";
import "./App.css";
import Chart from "./components/Chart";
import HomePage from "./views/HomePage";
import UserInfo from "./containers/UserInfo";
import Board from "./components/Leaderboard/index";
import ContentPage from "./views/ContentPage";
import Post from "./containers/Post";
import PostPage from "./containers/PostPage";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  console.log("STATUS: ", loggedIn);

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Grid container>
        {/* <Link to="/">Home</Link> */}
        {/* <Link to={{ pathname: "/about" }}>About</Link> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/chart" component={Chart} />
          <Route exact path="/userinfo" component={UserInfo} />
          <Route exact path="/leaderboard" component={Board} />
          <Route exact path="/contentpage" component={ContentPage} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/postpage" component={PostPage} />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} /> */}
          {/* <Route path="/contact" render={() => <h1>Contact Us</h1>} /> */}
          {/* <Route
            path="/blog"
            children={({ match }) => (
              <li className={match ? "active" : ""}>
                <Link to="/blog">Blog</Link>
              </li>
            )}
          /> */}
          {loggedIn === false && (
            <>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </>
          )}
          {loggedIn === true && (
            <>
              <Route exact path="/home" component={HomePage} />
            </>
          )}
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </Grid>

      {/* <Route path="/landing">
              <Movies />
            </Route> */}
    </BrowserRouter>
  );
}

export default Router;
