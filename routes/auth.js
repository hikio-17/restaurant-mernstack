const express = require("express");
const router = express();

router.post("/signup", (req, res) => {
  console.log("Inside Signup");
});

module.exports = router;
