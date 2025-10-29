import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse} from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

import jwt from "jsonwebtoken"
import mongoose from "mongoose";


const generateAccessAndRefreshToken = async (userId) => {
   try {

      const user = await User.findById(userId)
      const accessToken = user.generateAccessToken()
      const refreshToken = user.generateRefreshToken()

      user.refreshToken = refreshToken;
      await user.save({ validateBeforeSave: false })

      return { accessToken, refreshToken }

   } catch (error) {
      throw new ApiError(500, "something went wrong while generating accrss and refresh token")
   }
}

const registerUser = asyncHandler(async (req, res) => {
   const { email, fullname, password, } = req.body

   if ([ email, fullname, password].some((field) => field?.trim() === '')) {
      throw new ApiError(400, "All fields are compulsory",)

   }

   const existedUser = await User.findOne({ email })
   if (existedUser) {
      throw new ApiError(409, "Admin with this email already exists")
   }

   const user = await User.create({
      fullname,
      email,
      password,
   })

   const createdUser = await User.findById(user._id)
    .select(
       "-password -refreshToken" 
    )

   if (!createdUser) {
      throw new ApiError(500, "Something went wrong while registering the Admin")
   }

   return res.status(201).json(
      new ApiResponse(200, createdUser, "Admin registered successfully")
   )
})

const loginUser = asyncHandler(async (req, res) => {
   //mote: Steps for login:

   //get login data from req.body
   //check if user exists
   //check if password is correct
   //set access token
   //set refresh token 
   //send cookie

   console.log(req.body);


   const { password, email } = req.body

   if (!email) {
      throw new ApiError(404, "email is required")
   }
   if (!password) {
      throw new ApiError(403, "password is required")
   }

   const userData = await User.findOne({ email })


   if (!userData) {
      throw new ApiError(400, `no admin exists with the ${email}`)
   }

   const isPasswordValid = await userData.isPasswordCorrect(password)

   if (!isPasswordValid) {
      throw new ApiError(401, "Entered password is wrong, please enter correct password")
   }

   const { accessToken, refreshToken } = await generateAccessAndRefreshToken(userData._id)

   const loggedInUser = await User.findById(userData._id).select("-password -refreshToken")

   const options = {
      httpOnly: true,
      secure: true
   }

   return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
         new ApiResponse(200,
            {
               user: loggedInUser, accessToken, refreshToken
            }
            , "Admin Login was Successfull")
      )



})

const logoutUser = asyncHandler(async (req, res) => {

   await User.findByIdAndUpdate(req.user._id, {
      $set: {
         refreshToken: undefined
      },
   },
      {
         new: true
      }
   )


   const options = {
      httpOnly: true,
      secure: true
   }

   res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse(200, {}, "Admin logout successfull"))


})

const refreshAccessToken = asyncHandler(async (req, res) => {
   const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

   if (!incomingRefreshToken) {
      throw new ApiError(401, "unauthorized request")
   }
   try {
      const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET)

      const user = await User.findById(decodedToken?._id)

      if (!user) {
         throw new ApiError(401, "invalid refresh token")
      }

      if (incomingRefreshToken !== user?.refreshToken) {
         throw new ApiError(401, "refresh tokwn has expired or it is invalid")
      }

      const options = {
         httpOnly: true,
         secure: true
      }

      const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)

      res
         .status(200)
         .cookie('accessToken', accessToken , options)
         .cookie('refreshToken', refreshToken , options)
         .json(
            new ApiResponse(201, { userdata: user, accessToken, refreshToken },"new access token generated")
         )
   } catch (error) {
      throw new ApiError(401, error)
   }

})

const changeCurrentPassword = asyncHandler(async (req, res) => {
   const { oldPassword, newPassword } = req.body

   const user = await User.findById(req.user?._id)

   const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

   if (!isPasswordCorrect) {
      throw new ApiError(401, "old password is not correct")
   }

   user.password = newPassword

   await user.save({ validateBeforeSave: false })

   res
      .status(200)
      .json(new ApiResponse(200, {}, "password changed successfully"))


})

const getCurrentUser = asyncHandler(async (req, res) => {
   res
      .status(200)
      .json(new ApiResponse(200, req.user, "Current admin fetched successfully"))
})




export { registerUser, loginUser, logoutUser, refreshAccessToken, changeCurrentPassword, getCurrentUser}