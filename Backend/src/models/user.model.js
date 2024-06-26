const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const jwt= require("jsonwebtoken");

const userSchema=new mongoose.Schema({
    name: String,
    username:{
        type: String,
        unique: [true, "username should be unique!"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
    }
})
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
  });
  
  userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
  userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
      {
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName,
        isAdmin: false,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      }
    );
  };
  
  userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
      }
    );
  };
  
  
const User=mongoose.model('User', userSchema);
module.exports=User;