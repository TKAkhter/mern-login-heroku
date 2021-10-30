import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

import { GlobalContext } from "./context/Context";
import { useContext } from "react";

function App() {
  let { state } = useContext(GlobalContext);

  return (
    <>
      {state.user.email ? (
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
