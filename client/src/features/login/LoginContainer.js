import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";

class LoginContainer extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    const { name, email, password } = this.state;
    console.log(this.state);
    return (
      <div className="login-wrapper">
        <div className="login-body">
          <form noValidate autoComplete="off">
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={this.handleChange}
              className="login-input"
            />
            <TextField
              label="Password"
              variant="outlined"
              value={password}
              onChange={this.handleChange}
              className="login-input"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(LoginContainer);
