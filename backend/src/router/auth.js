const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "Saurabh_Is_A_Good_Coder";

//ROUTE-1-create a User
router.post(
  "/createuser",
  [
    // express validator
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("phone", "Enter a valid Email").isLength({ min: 10 }),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      // Check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({
            success,
            error: "Sorry a user with this email already exists",
          });
      }
      // bcrypt password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      // this function create and save tha user in database
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: secPass,
      });
      // this is for adding the user id into JWT-Token or authtoken
      const data = {
        user: {
          id: user.id,
        },
      };
      // const authtoken = jwt.sign(data,process.env.JWT_SECRET);
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occured");
    }
  }
);

//ROUTE-2-User login
router.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    // Finds the validation errors in this request and wraps them in an object with handy functions

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(400)
          .json({
            success,
            error: "please try to login with correct credentials",
          });
      }
      // password compare (bcrypt.compare make password hash self)
      const passComare = await bcrypt.compare(req.body.password, user.password);
      if (!passComare) {
        return res
          .status(400)
          .json({
            success,
            error: " pass please try to login with correct credentials",
          });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      // const authtoken = jwt.sign(data,process.env.JWT_SECRET);
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.status(200).json({ success, authtoken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occured");
    }
  }
);

//ROUTE-3-get loggin User details
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id; //it comes from middleware
    const user = await User.findById(userId).select("-password");

    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("some error occured");
  }
});

//ROUTE-4-Update user
router.put("/updateuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id; //it comes from middleware
    await User.findByIdAndUpdate(userId, req.body);

    // const updatedUser = await User.findById(userId).select("-password");

    // res.json({updatedUser})
    res.send("updated");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("some error occured");
  }
});

module.exports = router;
