import { Router } from "express";
import { updateFRresult,updateSRresult,getTodaysResult,getMonthlyResults } from "../controllers/result.controller.js";



const router=Router()

router.route("/update-fr").post(updateFRresult)
router.route("/update-sr").post(updateSRresult)
router.route("/todays-result").get(getTodaysResult)
router.route("/monthly-result").post(getMonthlyResults)

export default router