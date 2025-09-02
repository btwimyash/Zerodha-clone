const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

const Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const user = await User.create({
      email,
      password,
      username,
      createdAt: new Date(),
    });

    const token = createSecretToken(user._id);

    // Set cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false, // consider true for better security
    });

    // ✅ Return token in response
    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
      token,
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "Incorrect email or password" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ success: false, message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    // ✅ Return token in response
    return res.status(200).json({
      message: "User logged in successfully",
      success: true,
      token,
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const userVerification = (req, res) => {
  res.json({ message: "User verified successfully", success: true });
};

module.exports = { Signup, Login, userVerification };
