import { ADD_INCOME, ADD_EXPENSE } from "../actions/types";

const initialState = {
  incomes: [],
  expenses: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_INCOME:
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
}
