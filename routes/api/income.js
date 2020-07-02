const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const incomeController = require("../../controllers/incomeControl");

router
.route('/:incomeId*?')
.post(auth, incomeController.addIncome)
.put(auth, incomeController.editIncome)
.delete(auth, incomeController.deleteIncome)
.get(auth, incomeController.getIncome);

module.exports = router
