const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const authController = require("../../controllers/authControl");

//@route    POST api/auth
//@desc     Authenticate user
//@access   Public
router.post("/", authController.validateToken);

//@route    GET api/auth/user
//@desc     Get user data
//@access   Private
router.get("/user", auth, authController.validateUser);

module.exports = router;
