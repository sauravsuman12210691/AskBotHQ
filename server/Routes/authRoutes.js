const express = require("express");
const mongoose = require("mongoose");
const user = require("../Model/userModel");
const getuser = require("../middleware/getuser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const jwt_SECRT = "saurav123";
const bcrypt = require("bcrypt");
// const dotenv=require("dotenv");
// dotenv.config();

const mongodbURI = "mongodb://localhost:27017/AskBotHQ";
const router = express.Router();

mongoose.connect(mongodbURI);

// http://localhost:3000/api/auth/register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.send("All fields are required");
    }

    const existingUser = await user.findOne({ email });
    if (existingUser) {
      res.send("Email already in use");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new user({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.send({
      success: true
    });
  } catch (err) {
    res.status(500).json({ error: "Some error occurs", err });
  }
});
// http://localhost:3000/api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const avilUser = await user.findOne({ email });
    console.log(avilUser);
    if (!avilUser) {
      return res.send({ authentication: false });
    }
    const isMatch = await bcrypt.compare(password, avilUser.password);
    // const isMatch = password == avilUser.password;
    if (!isMatch) {
      return res.send({ authentication: false });
    }
    const data = {
      user: {
        id: avilUser.id,
      },
    };

    const awthToken = jwt.sign(data, jwt_SECRT);
    return res.send({ authentication: true, token: awthToken });
  } catch (err) {
    res.status(500).json({ error: "Some error occurs", err });
  }
});

// to get user details ----> http://localhost:3000/api/auth/dashboard
router.get("/dashboard", getuser, async (req, res) => {
  try {
    let userId = req.user.id;
    let userdetails = await user.findById(userId).select("-password");
    res.send(userdetails);
  } catch (err) {
    res.status(500).json({ error: "Some error occurs", err });
  }
});

module.exports = router;