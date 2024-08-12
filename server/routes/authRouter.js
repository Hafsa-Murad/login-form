const express = require("express");
const { signUpValidation,loginValidation } = require("../middleware/authValidation");
const {signUp, login} = require("../controllers/authController");
const router = express.Router();

router.post("/login", loginValidation, login);
router.post("/signUp", signUpValidation, signUp);

module.exports = router;
