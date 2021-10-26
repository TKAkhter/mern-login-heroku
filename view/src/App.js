import { Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="*">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
