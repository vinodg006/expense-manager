import React, { Component } from "react";
import { connect } from "react-redux";

class DashboardCntainer extends Component {
    render(){
        return <div />
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
  export default connect(mapStateToProps, null)(DashboardCntainer);