const express = require("express")


const router = express.Router()


const userController = require("../controller/user.controller")


router.get("/", userController.getAllUsers)
router.get("/profile", userController.getProfile)

module.exports = router;