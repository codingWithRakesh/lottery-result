import { Router } from "express";
import { updateFRresult,updateSRresult,getTodaysResult,getMonthlyResults,getLastThreeMonthsResults} from "../controllers/result.controller.js";
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router=Router()

router.route("/update-fr").post(verifyJWT,updateFRresult)
//on ("/api/v1/result/update-fr")
// INPUT JSON:-    {
//                 "city": "BHUTAN",
//                "date": fetch by using Date.now(),
//                "result": {
//                "number": "in String"
//                       }
//                }



router.route("/update-sr").post(verifyJWT,updateSRresult)
//on ("/api/v1/result/update-sr")
// INPUT JSON:-    {
//                 "city": "BHUTAN",
//                "date": fetch by using Date.now(),
//                "result": {
//                "number": "in String"
//                       }
//                }



router.route("/todays-result").get(getTodaysResult)
//on ("/api/v1/result/todays-result")
//simple get request


router.route("/monthly-result").post(getMonthlyResults)  
//on ("/api/v1/result/")
// INPUT JSON:- {
// "month":in munber (example :- 10 for october)
// "year":in number
//}


router.route("/past-three-months").get(getLastThreeMonthsResults)
//simple get request  on ( "/api/v1/result/past-three-months")

export default router