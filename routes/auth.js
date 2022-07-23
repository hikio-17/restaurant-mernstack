const express = require("express");
const router = express.Router();
const { signupController } = require("../controllers/auth");
const { signupValidator, validatorResult } = require("../middleware/validator");

router.post("/signup", signupValidator, validatorResult, signupController);

module.exports = router;
