const Review = require("../models/review.model.js");
const productService=require("../services/product.service.js")

async function createReview(reqData, user) {
  // console.log("req data ",reqData)
  const product = await productService.findProductById(reqData.productId);

  if(!product){
    throw new Error("product not found with id ", reqData.productId)
  }
  
  const review = new Review({
    user: user._id,
    product: product._id,
    review: reqData.review,
    createdAt: new Date(),
  });
  
  await product.save();
  return await review.save();
}

async function getAllReview(productId) {
  const product = await productService.findProductById(productId);

  if(!product){
    throw new Error("product not found with id ", productId)
  }
  
  const reviews = await Review.find({ product: productId }).populate("user");
  console.log("reviews ",reviews)
  return reviews
}


module.exports = {
  createReview,
  getAllReview,
};
