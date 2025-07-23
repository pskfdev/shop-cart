const express = require("express");
const router = express.Router();

//Controllers
const {
  listProducts,
  readProduct,
  createProduct,
  updateProduct,
  removeProduct,
} = require("../controllers/products");

router.get("/product", listProducts);
router.get("/product/:id", readProduct);
router.post("/product", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", removeProduct);

module.exports = router;
