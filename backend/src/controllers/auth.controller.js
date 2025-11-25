import { sendWelcomeEmail } from "../emails/emailHandlers.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import {ENV} from "../lib/env.js";

export const signup = async (req, res) => {

  const {fullname, email, password} = req.body;

  try {
    //logic for signup

    if(!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if(password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    //check if email vaild

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const user = await User.findOne({ email });
    if(user) {
      return  res.status(400).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    if(newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });

      try {
        await sendWelcomeEmail(newUser.email, newUser.fullname, ENV.CLIENT_URL);
      }catch {
        console.error("Failed to send welcome email");
      }

    }else {
      res.status(400).json({ message: "Invalid user data" });
    }

  } catch (error) {
    console.log("Signup Error: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};