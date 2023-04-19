const asyncHandler = require("express-async-handler")
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
//des register a user
// route post /api/users/register
//access public
const registerUser = asyncHandler(async (req,res) => {
 const {username ,email, password}= req.body;
 if(!username || !email || !password){
  res.status(400);
  throw new Error (" all fields are manadatory");
 }
 const userAvailable = await User.findOne(email);
 if(userAvailable){
  res.status(400);
  throw new Error("user already registered")
 }
 //hash password
 const hashedPassword = await bcrypt.hash(password, 10);
 console.log("hashed password: ", hashedPassword);
 res.json({message: "register the user"});
});

//des login user
// route post /api/users/login
//access public
const loginUser = asyncHandler(async (req,res) => {
 res.json({message: "login the user"})
});

//des current user info
// route post /api/users/current
//access private
const currentUser = asyncHandler(async (req,res) => {
 res.json({message: "current  user infromation"})
});

module.exports = {registerUser, loginUser, currentUser}