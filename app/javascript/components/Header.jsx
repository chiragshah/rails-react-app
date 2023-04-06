import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    fetch('/api/v1/sign_out', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "error",
    })
      .then((response) => {
        if (response.ok) {
          return
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => {
        localStorage.removeItem("authToken");
        navigate("/sign_in");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <Grid item>
          <Button color='inherit' to="/" component={Link}>
            ReactRailsApp
          </Button>
        </Grid>

        <Grid
          justifyContent="flex-end" // Add it here :)
          container 
        >
          <Grid item>
            <Button color='inherit' to="/invite" component={Link}>
              Invite
            </Button>
          </Grid>
          <Grid item>
            <div>
              <Button raised="true" color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}