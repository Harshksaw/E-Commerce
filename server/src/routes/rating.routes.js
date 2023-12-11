const express = require("express");
const authenticate = require("../middleware/authenticat.js");
const router = express.Router();
const ratingController = require("../services/rating.service.js");

router.get("/create",authenticate,ratingController.createRating);
router.put("/product/:productId",authenticate,ratingController.getProductsRating);


module.exports=router;