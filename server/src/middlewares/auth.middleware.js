import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken"



export const verifyJWT= asyncHandler(async ( req , res , next)=>{

    try {
        const token = req.cookies?.accessToken || req.header("Auhorization")?.replace("Bearer ","")
    
        if(!token){
            throw new ApiError(401, "unauthorization requet")
        }
        const decodedToken=jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!user){
            throw new ApiError(401,"Invalid access token")
        }
        req.user=user;
        next()
    } catch (error) {
        throw new ApiError(401,error|| "invalid access token || current session has ended login again to continue")
    }

})