const { Router } = require("express");
const { sequelize } = require("../utils/database");
const { User } = require("../models/user");

const router = Router();
router.get("/", async function (req, res) {
  sequelize
    .sync()
    .then(async () => {
      let users;
      // Select all rows using `findAll()` method
      users = await User.findAll({ raw: true });
      console.log("List of Users", users);
      res.status(200).json(users);
    })
    .catch((error) =>
      console.log("Failed to synchronize with the database", error)
    );
});

router.post("/", async function (req, res) {
  const { name, email, phone } = req.body;
  sequelize
    .sync()
    .then(async () => {
      // Insert new row using `create()` method
      const user = await User.create({ name, email, phone });
      console.log("Successfully added a new User!");
      res.json(user);
    })
    .catch((error) =>
      console.log("Failed to synchronize with the database:", error)
    );
});

router.delete("/:id", async function (req, res) {
  const { id } = req.params;
  sequelize
    .sync()
    .then(async () => {
      // Insert new row using `create()` method
      const user = await User.findByPk(id);
      console.log(user, id);
      await user.destroy();
      console.log("Successfully deleted a new User!");
      res.json(user);
    })
    .catch((error) =>
      console.log("Failed to synchronize with the database:", error)
    );
});
module.exports = router;
