import React from "react";
import { Grid, Paper, Avatar, TextField, Button,Typography,Link } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./login.css";
function Login() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const btnstyle={margin:'18px 0'}
  return (
    <div className="login">
    <Grid className="login-form">
      <Paper elevation={10} style={paperStyle}>
        <Grid alignItems="center">
          <Avatar className="avatar" style={{background:"blue",color:"white"}}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel style={{marginLeft:-138}}
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" color="primary" variant="contained"  style={btnstyle}  fullWidth>
          Sign in
        </Button>
        <Typography>
          {" "}
          Don't have an account?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
    </div>
  );
}

export default Login;
