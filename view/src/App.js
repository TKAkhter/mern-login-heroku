import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "./core";

function App() {
  let [isLogged, setIsLogged] = useState(false);
  // useEffect(() => {
  //   axios
  //     .get(`${baseUrl}/api/v1/getcookie`, { withCredentials: true })
  //     .then((res) => {
  //       setIsLogged(true);
  //     })
  //     .catch((e) => {
  //       console.log("error: ", e);
  //     });
  // }, [isLogged]);
  axios
    .get(`${baseUrl}/api/v1/getcookie`, { withCredentials: true })
    .then((res) => {
      setIsLogged(true);
    })
    .catch((e) => {
      console.log("error: ", e);
      setIsLogged(false);
    });
  return (
    <>
      {isLogged ? (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>

          <Redirect to="/" />
        </Switch>
      )}
    </>
  );
}

export default App;
