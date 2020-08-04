import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "./features/auth/AuthContainer";
import Dashboard from "./features/dashboard/DashboardContainer";

class App extends Component {
  render() {
    return this.props.isAuthenticated ? <Dashboard /> : <Auth />;
    // return true ? <Dashboard /> : <Auth />;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(App);
