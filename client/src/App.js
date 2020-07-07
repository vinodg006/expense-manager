import React, { Component } from 'react';
import { connect } from "react-redux";
import Login from "./features/login/LoginContainer";
import Dashboard from "./features/dashboard/DashboardContainer";

class App extends Component {
  render() {
      return this.props.isAuthenticated ? <Dashboard /> : <Login />;
  }
} 

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
