import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { commonNumber } from "../models/common.models.js";

const updateCommonNumbers = asyncHandler(async (req, res) => {
  const { date, FR, SR } = req.body;

  // 🧩 Validate input
  if (!date) {
    throw new ApiError(400, "Date is required");
  }
  if (!FR && !SR) {
    throw new ApiError(400, "At least one of FR or SR data is required");
  }

  // 🕓 Normalize and validate date
  const normalizedDate = new Date(date);
  if (isNaN(normalizedDate)) {
    throw new ApiError(400, "Invalid date format");
  }
  normalizedDate.setHours(0, 0, 0, 0);

  // 📅 Extract day, month, year
  const day = normalizedDate.getUTCDate();
  const month = normalizedDate.getUTCMonth() + 1;
  const year = normalizedDate.getUTCFullYear();

  // 🛠️ Build update object dynamically
  const updateFields = {};

  if (FR) {
    if (!FR.Direct || !FR.House || !FR.Ending) {
      throw new ApiError(400, "FR must include Direct, House, and Ending");
    }
    updateFields["common.FR.Direct"] = FR.Direct;
    updateFields["common.FR.House"] = FR.House;
    updateFields["common.FR.Ending"] = FR.Ending;
    updateFields["common.FR.time"] = "16:20";
  }

  if (SR) {
    if (!SR.Direct || !SR.House || !SR.Ending) {
      throw new ApiError(400, "SR must include Direct, House, and Ending");
    }
    updateFields["common.SR.Direct"] = SR.Direct;
    updateFields["common.SR.House"] = SR.House;
    updateFields["common.SR.Ending"] = SR.Ending;
    updateFields["common.SR.time"] = "17:20";
  }

  // 🔄 Update or create document
  const updatedCommon = await commonNumber.findOneAndUpdate(
    { date: normalizedDate },
    {
      $setOnInsert: { day, month, year },
      $set: updateFields,
    },
    { upsert: true, new: true }
  );

  if (!updatedCommon) {
    throw new ApiError(500, "Failed to update common numbers");
  }

  // ✅ Respond
  return res.status(201).json(
    new ApiResponse(
      201,
      {
        date: updatedCommon.date,
        day: updatedCommon.day,
        month: updatedCommon.month,
        year: updatedCommon.year,
        common: updatedCommon.common,
      },
      "Common numbers updated successfully"
    )
  );
});

const getTodayCommonNumbers = asyncHandler(async (req, res) => {
  // 🕒 Get current date in UTC (normalized)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const day = today.getUTCDate();
  const month = today.getUTCMonth() + 1;
  const year = today.getUTCFullYear();

  // 🔍 Find today’s record
  const commonData = await commonNumber.findOne({ day, month, year }).lean();

  if (!commonData) {
    throw new ApiError(404, "No common numbers found for today");
  }

  // ✅ Respond with essential data
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        day: commonData.day,
        month: commonData.month,
        year: commonData.year,
        common: commonData.common,
      },
      "Today's common numbers fetched successfully"
    )
  );
});

export { updateCommonNumbers, getTodayCommonNumbers };
