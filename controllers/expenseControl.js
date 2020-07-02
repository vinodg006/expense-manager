//User Model
const User = require("../models/User");

//Expense Model
const Expense = require("../models/Expense");

const addExpense = async (req,res) => {
    try {
        let newTransaction = new Expense(req.body);
        let user = await User.findById(req.user.id);
        //Store user ref
        newTransaction.user = user;

        //find category
        let category = user.expense_categories.find(
          category => category.name === req.body.category.name.trim()
        );
    
        //create new category, if not already
        if (!category) {
          user.expense_categories.push(req.body.category);
          await user.save();
          category = user.expense_categories.find(
            category => category.name === req.body.category.name.trim()
          );
        }
    
        newTransaction.category = category;
        await newTransaction.save();
        return res.json(newTransaction);
      } catch (e) {
        console.log(e);
        return res.status(400).json({ error: e });
      }
}

const editExpense = async (req, res) => {
    try {
      let expense = await Expense.findById(
        req.params.expenseId
      ).populate("user", "id");
  
      if (!expense) {
        return res.status(404).json({ error: "Transaction not found" });
      }
  
      expense = await Expense.findByIdAndUpdate(
        req.params.expenseId,
        { $set: req.body },
        { new: true }
      );
  
      return res.json(expense);
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: e });
    }
  };


  const deleteExpense = async (req, res) => {
    try {
      let expense = await Expense.findById(
        req.params.expenseId
      ).populate("user", "id");
        
      if (!expense) {
        return res.status(404).json({ error: "Transaction not found" });
      }
  
      await expense.remove(req.params.expenseId);
  
      return res.json({ success: true });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: e });
    }
  };

  const getExpense = async (req, res) => {
    try {
      if (req.params.expenseId) {
        let expense = await Expense.findById(
          req.params.expenseId
        ).populate("user", "id");

        if (!expense) {
          return res.status(401).json({
            error:
              "Could not find the transaction"
          });
        } else {
          return res.json(expense);
        }
      } else {
        let expenses = await Expense.find({
          user: await User.findById(req.user.id)
        });
  
        return res.json(expenses);
      }
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: e });
    }
  };
  

module.exports = {addExpense, editExpense, deleteExpense, getExpense}
