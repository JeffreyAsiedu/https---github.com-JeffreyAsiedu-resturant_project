const {
  home,
  about,
  menu,
  chefs,
  gallery,
  contact,
} = require("../controllers/frontendController");
const express = require("express");
const router = express.Router();

router.get("/", home);
router.get("/about-us", about);
router.get("/menu", menu);
router.get("/chefs", chefs);
router.get("/gallery", gallery);
router.get("/contact", contact);

module.exports = router;
