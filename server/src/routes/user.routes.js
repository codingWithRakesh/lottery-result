import { Router } from "express";
import { registerUser, loginUser, logoutUser, refreshAccessToken, changeCurrentPassword, getCurrentUser} from "../controllers/user.controller.js" 
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router= Router()


router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/currentuser").get(verifyJWT,getCurrentUser)
router.route("/logout").get(verifyJWT,logoutUser)
router.route("/refresh").get(refreshAccessToken)
router.route("/changepassword").post(verifyJWT,changeCurrentPassword)


export default router