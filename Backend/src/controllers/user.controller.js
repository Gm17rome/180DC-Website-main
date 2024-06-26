const { asyncHandler } =require( "../utils/asyncHandler.js");
const { ApiError } =require( "../utils/ApiError.js");
const User =require( "../models/user.model.js");
const { ApiResponse } =require( "../utils/ApiResponse.js");
const jwt =require( "jsonwebtoken");
const mongoose =require( "mongoose");

const generateAcessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating refresh and acess token!"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const {name, username, password} = req.body;
  
  if (
    [name, username, password].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required:");
  }
  const existedUser = await User.findOne({
    $or: [{ username }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email/username already exists");
  }
  
  const user = await User.create({
    name:name,
    username: username.toLowerCase(),
    password,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  console.log(username);
  if (!username) {
    throw new ApiError(400, "username is req");
  }
  const user = await User.findOne({ username: username.toLowerCase() });
  if (!user) {
    throw new ApiError(404, "User does not exists");
  }
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid Credentials!");
  }
  const { accessToken, refreshToken } = await generateAcessAndRefreshToken(
    user._id
  );
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
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
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User loggedIn successfully!"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
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
    .json(new ApiResponse(200, {}, "User logged out successfully!"));
});

module.exports= {
  registerUser,
  loginUser,
  logoutUser,
};
