const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/database");

// Define the student model that creates a table in the `student_database`
const User = sequelize.define("user", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
});

module.exports = { User };
