import React, { Component } from "react";
import { connect } from "react-redux";
import { TabPanel } from "./components/TabPanel";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import Landing from "../overview/OverviewContainer";

class Dashboard extends Component {
  state = {
    tab: 0,
  };

  handleTabChange = (event, newValue) => {
    this.setState({ tab: newValue });
  };

  render() {
    const { user } = this.props;
    const { tab } = this.state;

    console.log(user);
    return (
      <div
        style={{
          flexGrow: 1,
          width: "100%",
        }}
      >
        <AppBar position="static">
          <Tabs
            value={tab}
            onChange={this.handleTabChange}
            variant="fullWidth"
            scrollButtons="off"
            aria-label="scrollable prevent tabs example"
            style={{ backgroundColor: "green" }}
          >
            <Tab
              icon={<DashboardIcon />}
              aria-label="phone"
              id="scrollable-prevent-tab-0"
              aria-controls="scrollable-prevent-tabpanel-0"
            />
            <Tab
              icon={<SettingsIcon />}
              aria-label="favorite"
              id="scrollable-prevent-tab-1"
              aria-controls="scrollable-prevent-tabpanel-1"
            />
          </Tabs>
        </AppBar>
        <TabPanel value={tab} index={0}>
          <Landing />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          Item Two
        </TabPanel>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(Dashboard);
