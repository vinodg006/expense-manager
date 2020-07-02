const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const expenseController = require("../../controllers/expenseControl");

router
.route('/:expenseId*?')
.post(auth, expenseController.addExpense)
.put(auth, expenseController.editExpense)
.delete(auth, expenseController.deleteExpense)
.get(auth, expenseController.getExpense);

module.exports = router
