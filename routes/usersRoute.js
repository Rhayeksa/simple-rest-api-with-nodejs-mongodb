const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
// const Users = require("../models/usersModel")

// router.get("/", userController.test);
router.get("/", userController.showAll);
router.get("/:id", userController.findById);
router.post("/add", userController.add);
router.delete("/delete/:id", userController.deleteById);
router.put("/update/:id", userController.updateById);

module.exports = router;
