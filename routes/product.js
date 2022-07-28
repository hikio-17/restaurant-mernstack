const express = require("express");
const { authenticatateJWT } = require("../middleware/authenticator");
const upload = require("../middleware/multer");
const router = express.Router();
const productController = require("../controllers/product");

router.post(
  "/",
  authenticatateJWT,
  upload.single("productImage"),
  productController.create
);

module.exports = router;
