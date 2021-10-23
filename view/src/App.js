import { Switch, Route, useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  let history = useHistory();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                history.push("/");
              }}
            >
              Dashboard
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                history.push("/signup");
              }}
            >
              Signup
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Switch>
        <Route path="/Signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
