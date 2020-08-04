import { ADD_INCOME, ADD_EXPENSE } from "../actions/types";
import axios from "axios";
import { returnErrors } from "./errorActions";
import { tokenConfig } from "./authActions";

export const addTransaction = ({ amount, comment, category, date, name }) => (
  dispatch,
  getState
) => {
  const body = JSON.stringify({ amount, comment, category, date });
  if (name === "Income") {
    axios
      .post("api/income", body, tokenConfig(getState))
      .then((res) => dispatch({ type: ADD_INCOME, payload: res.data }))
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
      });
  } else {
    axios
      .post("api/expense", body, tokenConfig(getState))
      .then((res) => dispatch({ type: ADD_EXPENSE, payload: res.data }))
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
      });
  }
};
