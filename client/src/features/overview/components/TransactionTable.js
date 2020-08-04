import React, { useState } from "react";
import MaterialTable from "material-table";

export const TransactionTable = ({ name }) => {
  const [state, setState] = useState({
    columns: [
      { title: "Date", field: "date", type: "date" },
      {
        title: "Category",
        field: "category",
        lookup: { 0: "Salary", 1: "Other" },
      },
      { title: "Amount", field: "amount", type: "numeric" },
      {
        title: "Comment",
        field: "comment",
      },
    ],
    data: [{ date: "Mehmet", category: 0, amount: 1987, comment: "Hiiii" }],
  });
  return (
    <MaterialTable
      style={{ marginTop: 30 }}
      columns={state.columns}
      data={state.data}
      options={{
        rowStyle: {
          backgroundColor: "#EEE",
        },
      }}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
};
