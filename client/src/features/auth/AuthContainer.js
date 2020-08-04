import React, { Component } from "react";
import { connect } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Link, Button, TextField } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { login, register } from "../../actions/authActions";

class AuthContainer extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    isRegister: false,
  };
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = () => {
    const { name, email, password, isRegister } = this.state;
    const { login, register } = this.props;

    if (isRegister) {
      register({ name, email, password });
    } else {
      login({ email, password });
    }
  };

  render() {
    const { name, email, password, isRegister } = this.state;

    const theme = createMuiTheme({
      palette: {
        primary: green,
      },
    });

    return (
      <div className="login-wrapper">
        <div className="login-body">
          <form>
            {isRegister && (
              <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={this.handleNameChange}
                className="login-input"
              />
            )}
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={this.handleEmailChange}
              className="login-input"
            />
            <TextField
              label="Password"
              variant="outlined"
              value={password}
              onChange={this.handlePasswordChange}
              className="login-input"
            />
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                style={{ width: "270px", color: "#fff", margin: "0 0 15px 0" }}
                onClick={this.handleSubmit}
              >
                {isRegister ? "Create Account" : "Login"}
              </Button>
            </ThemeProvider>
          </form>
          <div>
            <span>
              {isRegister ? "Already registered?" : "Not registered?"} &nbsp;
            </span>
            <Link
              href="#"
              style={{ color: "green" }}
              onClick={() => this.setState({ isRegister: !isRegister })}
            >
              {isRegister ? "Sign In" : "Create an account"}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { login, register })(AuthContainer);
