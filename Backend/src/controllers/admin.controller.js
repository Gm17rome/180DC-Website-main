const { asyncHandler } =require("../utils/asyncHandler.js");
const { ApiError } =require("../utils/ApiError.js");
const { ApiResponse } =require("../utils/ApiResponse.js");
const mongoose =require("mongoose");
const Admin =require("../models/admin.model.js");
const MailList = require('../models/mail_list.model.js');
const nodemailer = require('nodemailer');


const generateAcessAndRefreshToken = async (adminId) => {
  try {
    const admin = await Admin.findById(adminId);
    const accessToken = admin.generateAccessToken();
    const refreshToken = admin.generateRefreshToken();
    admin.refreshToken = refreshToken;
    await admin.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating refresh and acess token!"
    );
  }
};

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, username, password } = req.body;
  if (!name || !username || !password) {
    throw new ApiError(400, "Name, username, and password are required");
  }
  const existing = await Admin.findOne({ username: username.toLowerCase() });
  if (existing) {
    throw new ApiError(402, "Account with username already exists!");
  }
  const adminUser = await Admin.create({
    name,
    username: username.toLowerCase(),
    password,
  });
  const createdAdmin = await Admin.findById(adminUser._id).select(
    "-password -refreshToken"
  );
  if (!createdAdmin) {
    throw new ApiError(500, "Internal server error!");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, createdAdmin, "Admin account created!"));
});


const loginAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ApiError(400, "username and password are required");
  }
  const admin = await Admin.findOne({ username: username.toLowerCase() });
  if (!admin) {
    throw new ApiError(404, "Admin not found");
  }
  const isPasswordValid = await admin.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid Credentials!");
  }
  const { accessToken, refreshToken } = await generateAcessAndRefreshToken(
    admin._id
  );
  const loggedInAdmin = await Admin.findById(admin._id).select(
    "-password -refeshToken"
  );
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          admin: loggedInAdmin,
          accessToken,
          refreshToken,
        },
        "User loggedIn successfully!"
      )
    );
});

const logoutAdmin = asyncHandler(async (req, res) => {
  await Admin.findByIdAndUpdate(
    req.admin._id,
    {
      $unset: { refreshToken: 1 },
    },
    {
      new: true,
    }
  );
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Admin logged out successfully!"));
});

const mail_set= asyncHandler(async (req,res)=>{
    try {
    
    const { heading, subject, body } = req.body;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const subscribers = await MailList.find({});

    const d = new Date();
    let year = d.getFullYear();

    // Create the mail
    const mailOptions = {
      from: process.env.EMAIL,
      subject: subject,
      html: 
      `
        <html>
        <head>
          <style>
            .email-container {
              font-family: Arial, sans-serif;
              line-height: 1.6;
            }
            .header {
              background-color: #f2f2f2;
              padding: 20px;
              text-align: center;
            }
            .content {
              padding: 20px;
            }
            .footer {
              background-color: #f2f2f2;
              padding: 10px;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h1>${heading}</h1>
            </div>
            <div class="content">
              <p>${body}</p>
            </div>
            <div class="footer">
              <p>&copy; ${year} 180 DC BIT MESRA</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    for (const subscriber of subscribers) {
      mailOptions.to = subscriber.email;
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.log('Error sending email to:', subscriber.email, error);
        } else {
          console.log('Email sent to:', subscriber.email);
        }
      });
    }

    res.status(200).send('Newsletter sent!');
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
})

module.exports= {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  mail_set,
};
