const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/database");

// Define the student model that creates a table in the `student_database`
const Expense = sequelize.define("expense", {
  name: DataTypes.STRING,
  price: DataTypes.STRING,
});

module.exports = { Expense };
