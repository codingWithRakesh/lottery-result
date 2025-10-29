import { Router } from "express";
import { registerUser, loginUser, logoutUser, refreshAccessToken, changeCurrentPassword, getCurrentUser} from "../controllers/user.controller.js" 
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router= Router()


router.route("/register").post(registerUser)
// on ("/api/v1/admin/register")
// INPUT:- { email, fullname, password }

router.route("/login").post(loginUser)
// on ("/api/v1/admin/login")
// INPUT:- { email, password}

router.route("/currentuser").get(verifyJWT,getCurrentUser)
// on ("/api/v1/admin/currentuser")

router.route("/logout").get(verifyJWT,logoutUser)
// on ("/api/v1/admin/logout")

router.route("/refresh").get(refreshAccessToken)
// on ("/api/v1/admin/refresh")

router.route("/changepassword").post(verifyJWT,changeCurrentPassword)
// on ("/api/v1/admin/changepassword")
// INPUT:- { email, fullname, password, }


export default router