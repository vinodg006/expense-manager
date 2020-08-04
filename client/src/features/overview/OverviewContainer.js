import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Grid, Paper } from "@material-ui/core";
import { TransactionModal } from "./components/TransactionModal";
import { TransactionTable } from "./components/TransactionTable";
import { addTransaction } from "../../actions/transactionActions";

class OverviewContainer extends Component {
  state = {};

  render() {
    const {
      addTransaction,
      user: { income_categoies, expense_categories },
    } = this.props;
    console.log(this.props.user, "Vinod");
    return (
      <Fragment>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <span>
              <TransactionModal
                name="Income"
                addTransaction={addTransaction}
                categories={income_categoies}
              />
            </span>
          </Grid>
          <Grid item xs={6}>
            <span>
              <TransactionModal
                name="Expense"
                addTransaction={addTransaction}
                categories={expense_categories}
              />
            </span>
          </Grid>
        </Grid>
        <TransactionTable />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { addTransaction })(OverviewContainer);
