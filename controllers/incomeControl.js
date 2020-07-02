//User Model
const User = require("../models/User");

//Income Model
const Income = require("../models/Income");

const addIncome = async (req,res) => {
    try {
        let newTransaction = new Income(req.body);
        let user = await User.findById(req.user.id);
        //Store user ref
        newTransaction.user = user;

        //find category
        let category = user.income_categories.find(
          category => category.name === req.body.category.name.trim()
        );
    
        //create new category, if not already
        if (!category) {
          user.income_categories.push(req.body.category);
          await user.save();
          category = user.income_categories.find(
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

const editIncome = async (req, res) => {
    try {
      let income = await Income.findById(
        req.params.incomeId
      ).populate("user", "id");

      console.log(income, "income")
  
      if (!income) {
        return res.status(404).json({ error: "Transaction not found" });
      }
  
      income = await Income.findByIdAndUpdate(
        req.params.incomeId,
        { $set: req.body },
        { new: true }
      );
  
      return res.json(income);
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: e });
    }
  };


  const deleteIncome = async (req, res) => {
    try {
      let income = await Income.findById(
        req.params.incomeId
      ).populate("user", "id");
        
      if (!income) {
        return res.status(404).json({ error: "Transaction not found" });
      }
  
      await Income.remove(req.params.incomeId);
  
      return res.json({ success: true });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: e });
    }
  };

  const getIncome = async (req, res) => {
    try {
      if (req.params.incomeId) {
        let income = await Income.findById(
          req.params.incomeId
        ).populate("user", "id");

        if (!income) {
          return res.status(401).json({
            error:
              "Could not find the transaction"
          });
        } else {
          return res.json(income);
        }
      } else {
        let incomes = await Income.find({
          user: await User.findById(req.user.id)
        });
  
        return res.json(incomes);
      }
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: e });
    }
  };
  

module.exports = {addIncome, editIncome, deleteIncome, getIncome}
