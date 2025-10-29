import { Router } from "express";
import { updateFRresult,updateSRresult,getTodaysResult,getMonthlyResults } from "../controllers/result.controller.js";
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router=Router()

router.route("/update-fr").post(verifyJWT,updateFRresult)
router.route("/update-sr").post(verifyJWT,updateSRresult)
router.route("/todays-result").get(getTodaysResult)
router.route("/monthly-result").post(getMonthlyResults)

export default router