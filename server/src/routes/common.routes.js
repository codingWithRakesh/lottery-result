import { Router } from "express";
import { getTodayCommonNumbers, updateCommonNumbers } from "../controllers/common.controller.js";
import {verifyJWT} from "../middlewares/auth.middleware.js"
const router= Router()

router.route("/update").post(verifyJWT,updateCommonNumbers)

//make a post request on ("/api/v1/common/update")
// INPUT JSON:-    {
//     "date":send todays date from frontend by using Date.now() dont take user input,
//     "FR": {
//         "Direct": "String value",
//         "Ending": "String value",,
//         "House": "String value",
//     },
//     "SR": {
//         "Direct": "String value",,
//         "Ending": "String value",,
//         "House": "String value",
//     }
// }

router.route("/get-common-numbers").get(getTodayCommonNumbers)
//just a simple get request on ("/api/v1/common/get-common-numbers")




export default router