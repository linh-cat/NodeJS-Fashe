var express = require("express");
var router = express.Router();

/* render page. */
router.get("/", function (req, res, next) {
  res.render("pages/index");
});
router.get("/product", function (req, res, next) {
  res.render("pages/product");
});
router.get("/product-detail", function (req, res, next) {
  res.render("pages/product_detail");
});
router.get("/cart", function (req, res, next) {
  res.render("pages/cart");
});
router.get("/blog", function (req, res, next) {
  res.render("pages/blog");
});
router.get("/blog-detail", function (req, res, next) {
  res.render("pages/blog_detail");
});
router.get("/about", function (req, res, next) {
  res.render("pages/about");
});
router.get("/contact", function (req, res, next) {
  res.render("pages/contact");
});
router.get("/error", function (req, res, next) {
  res.render("/pages/error");
});

module.exports = router;
