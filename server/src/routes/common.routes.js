import { Router } from "express";
import { getTodayCommonNumbers, updateCommonNumbers } from "../controllers/common.controller.js";

const router= Router()

router.route("/update").post(updateCommonNumbers)
router.route("/get-common-numbers").get(getTodayCommonNumbers)




export default router