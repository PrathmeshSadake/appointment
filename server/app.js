const expensesRoute = require("./routes/expense");
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./utils/database");

const app = express();
app.use(express.json());
app.use(cors());

// Validate and connect to the database
sequelize
  .authenticate()
  .then(() =>
    app.listen(8000, () => {
      console.log("Successfully connected to the database!");
    })
  )
  .catch((error) => console.log("Failed to connect the database:", error));

app.use("/expenses", expensesRoute);
app.use("/", (req, res) => {
  res.send("Server Running");
});
