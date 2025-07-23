const express = require("express");
const router = express.Router();

//Controllers
const {
  listUsers,
  readUser,
  createUser,
  updateUser,
  removeUser,
} = require("../controllers/users");

router.get("/user", listUsers);
router.get("/user/:id", readUser);
router.post("/user", createUser);
router.put("/user", updateUser);
router.delete("/user", removeUser);

module.exports = router;
