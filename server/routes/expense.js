const { Router } = require("express");
const { sequelize } = require("../utils/database");
const { Expense } = require("../models/expense");

const router = Router();
router.get("/", async function (req, res) {
  sequelize
    .sync()
    .then(async () => {
      let expenses;
      // Select all rows using `findAll()` method
      expenses = await Expense.findAll({ raw: true });
      console.log("List of Users", expenses);
      res.status(200).json(expenses);
    })
    .catch((error) =>
      console.log("Failed to synchronize with the database", error)
    );
});

router.post("/", async function (req, res) {
  const { name, price } = req.body;
  sequelize
    .sync()
    .then(async () => {
      // Insert new row using `create()` method
      const expense = await Expense.create({ name, price });
      console.log("Successfully added a new User!");
      res.json(expense);
    })
    .catch((error) =>
      console.log("Failed to synchronize with the database:", error)
    );
});

module.exports = router;
