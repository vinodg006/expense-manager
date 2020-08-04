import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "block",
    marginTop: "25px",
    maxWidth: 160,
  },
});

export const TransactionModal = ({ name, addTransaction, categories }) => {
  const [modal, openModal] = useState(false);
  const [category, setCategory] = useState({ name: "Unknown" });
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const classes = useStyles();

  const handleSubmit = () => {
    addTransaction({ amount, comment, category, date, name });
    openModal(false);
  };
  return (
    <Typography component={"div"} style={{ textAlign: "center" }}>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => openModal(true)}
      >
        {`Add ${name}`}
      </Button>
      <Dialog
        open={modal}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{`Add ${name}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <form noValidate>
              <TextField
                id="date"
                label="Date"
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <FormControl
                classes={{
                  root: classes.root,
                }}
              >
                <InputLabel
                  shrink
                  id="demo-simple-select-placeholder-label-label"
                >
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  displayEmpty
                >
                  <MenuItem value={{ name: "Unknown" }}>
                    <em>None</em>
                  </MenuItem>
                  {categories &&
                    categories.map(({ name, color }, index) => (
                      <MenuItem value={{ name, color }} key={index}>
                        {val.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <FormControl
                variant="outlined"
                classes={{
                  root: classes.root,
                }}
              >
                <InputLabel htmlFor="outlined-adornment-amount">
                  Amount
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>
              <TextField
                id="standard-multiline-flexible"
                label="Add Comment/Note"
                multiline
                rowsMax={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                classes={{
                  root: classes.root,
                }}
              />
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Add Transaction
          </Button>
        </DialogActions>
      </Dialog>
    </Typography>
  );
};
