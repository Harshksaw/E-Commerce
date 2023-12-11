// services/product.service.js
const Product = require('../models/product.model');
const Category = require('../models/category.model');

async function createProduct(req) {
  const topLevel = await Category.findOne({ name: req.getTopLavelCategory() });

  if (!topLevel) {
    const topLavelCategory = new Category({
      name: req.getTopLavelCategory(),
      level: 1,
    });

    topLevel = await topLavelCategory.save();
  }

  let secondLevel = await Category.findOne({
    name: req.getSecondLavelCategory(),
    parentCategory: topLevel.name,
  });

  if (!secondLevel) {
    const secondLavelCategory = new Category({
      name: req.getSecondLavelCategory(),
      parentCategory: topLevel.name,
      level: 2,
    });

    secondLevel = await secondLavelCategory.save();
  }

  let thirdLevel = await Category.findOne({
    name: req.getThirdLavelCategory(),
    parentCategory: secondLevel.name,
  });

  if (!thirdLevel) {
    const thirdLavelCategory = new Category({
      name: req.getThirdLavelCategory(),
      parentCategory: secondLevel.name,
      level: 3,
    });

    thirdLevel = await thirdLavelCategory.save();
  }

  const product = new Product({
    title: req.getTitle(),
    color: req.getColor(),
    description: req.getDescription(),
    discountedPrice: req.getDiscountedPrice(),
    discountPercent: req.getDiscountPersent(),
    imageUrl: req.getImageUrl(),
    brand: req.getBrand(),
    price: req.getPrice(),
    sizes: req.getSize(),
    quantity: req.getQuantity(),
    category: thirdLevel._id,
    createdAt: new Date(),
  });

  const savedProduct = await product.save();
  console.log('products - ', product);

  return savedProduct;
}

async function deleteProduct(productId) {
  const product = await findProductById(productId);

  console.log('delete product ', product.getId(), ' - ', productId);
  product.getSizes().clear();
  await product.remove();

  return 'Product deleted Successfully';
}

async function updateProduct(productId, req) {
  const product = await findProductById(productId);

  if (req.getQuantity() !== 0) {
    product.setQuantity(req.getQuantity());
  }
  if (req.getDescription() !== null) {
    product.setDescription(req.getDescription());
  }

  return product.save();
}

async function getAllProducts() {
  return Product.find();
}

async function findProductById(id) {
  const product = await Product.findById(id);

  if (product) {
    return product;
  }

  throw new ProductException('Product not found with id ' + id);
}

async function findProductByCategory(category) {
  console.log('category --- ', category);

  return Product.find({ category });
}

async function searchProduct(query) {
  return Product.searchProduct(query);
}

async function getAllProduct(category, colors, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize) {
  // Implement the filtering logic
  // ...
}

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  findProductByCategory,
  searchProduct,
  getAllProduct,
};
