import { Router } from "express";
import { getTodayCommonNumbers, updateCommonNumbers } from "../controllers/common.controller.js";
import {verifyJWT} from "../middlewares/auth.middleware.js"
const router= Router()

router.route("/update").post(verifyJWT,updateCommonNumbers)
router.route("/get-common-numbers").get(getTodayCommonNumbers)




export default router