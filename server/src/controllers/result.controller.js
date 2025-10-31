import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Result } from "../models/result.models.js";

const updateFRresult = asyncHandler(async (req, res) => {
  const { date, city, result } = req.body;

  // 🧩 Validate fields
  const fields = { date, city, result };
  Object.entries(fields).forEach(([key, value]) => {
    if (!value) {
      throw new ApiError(400, `${key} cannot be empty as it is required`);
    }
  });

  // 🕒 Parse date and normalize to IST midnight
  const inputDate = new Date(date);
  if (isNaN(inputDate)) {
    throw new ApiError(400, "Invalid date format");
  }

  // Convert to IST (UTC + 5:30)
  const IST_OFFSET = 5.5 * 60 * 60 * 1000; // 5h 30m in ms
  const normalizedDate = new Date(inputDate.getTime() + IST_OFFSET);
  normalizedDate.setHours(0, 0, 0, 0);

  const day = normalizedDate.getDate();
  const month = normalizedDate.getMonth() + 1;
  const year = normalizedDate.getFullYear();

  // 🔍 Update FR result if exists, otherwise insert
  let updatedFRresult = await Result.findOneAndUpdate(
    { day, month, year, "results.timeslot": "FR" },
    {
      $set: {
        "results.$.number": result.number,
        "results.$.time": "16:20",
      },
    },
    { new: true }
  );

  if (!updatedFRresult) {
    updatedFRresult = await Result.findOneAndUpdate(
      { day, month, year },
      {
        $setOnInsert: { date: normalizedDate, city, day, month, year },
        $push: {
          results: { timeslot: "FR", number: result.number, time: "16:20" },
        },
      },
      { upsert: true, new: true }
    );
  }

  // ✅ Return response
  return res
    .status(201)
    .json(
      new ApiResponse(201, updatedFRresult, "FR result updated successfully")
    );
});

const updateSRresult = asyncHandler(async (req, res) => {
  const { date, city, result } = req.body;

  // 🧩 Validate required fields
  const fields = { date, city, result };
  Object.entries(fields).forEach(([key, value]) => {
    if (!value) {
      throw new ApiError(400, `${key} cannot be empty as it is required`);
    }
  });

  // 🕒 Parse and normalize to IST midnight
  const inputDate = new Date(date);
  if (isNaN(inputDate)) {
    throw new ApiError(400, "Invalid date format");
  }

  // Convert to India Standard Time (IST)
  const IST_OFFSET = 5.5 * 60 * 60 * 1000; // 5 hours 30 min in ms
  const normalizedDate = new Date(inputDate.getTime() + IST_OFFSET);
  normalizedDate.setHours(0, 0, 0, 0);

  const day = normalizedDate.getDate();
  const month = normalizedDate.getMonth() + 1;
  const year = normalizedDate.getFullYear();

  // 🔍 Update SR result if exists, otherwise insert new
  let updatedSRresult = await Result.findOneAndUpdate(
    { day, month, year, "results.timeslot": "SR" },
    {
      $set: {
        "results.$.number": result.number,
        "results.$.time": "17:20",
      },
    },
    { new: true }
  );

  if (!updatedSRresult) {
    updatedSRresult = await Result.findOneAndUpdate(
      { day, month, year },
      {
        $setOnInsert: { date: normalizedDate, city, day, month, year },
        $push: {
          results: { timeslot: "SR", number: result.number, time: "17:20" },
        },
      },
      { upsert: true, new: true }
    );
  }

  // ✅ Send response
  return res
    .status(201)
    .json(
      new ApiResponse(201, updatedSRresult, "SR result updated successfully")
    );
});

const getTodaysResult = asyncHandler(async (req, res) => {
  // Get current date and convert it to IST (India Standard Time)
  const now = new Date();
  const indiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const currentHour = indiaTime.getHours();
  const currentMinute = indiaTime.getMinutes();
  // console.log(currentHour);
  

  const day = indiaTime.getDate();
  const month = indiaTime.getMonth() + 1;
  const year = indiaTime.getFullYear();

  // Find today's result
  const todayResult = await Result.findOne({ day, month, year });

  if (!todayResult) {
    throw new ApiError(404, "No result found for today's date");
  }

  // Deep clone result so we can safely modify it
  const filteredResult = JSON.parse(JSON.stringify(todayResult));
  // console.log(filteredResult);
  

  // Filter FR and SR based on current IST time
  filteredResult.results = todayResult.results.filter((item) => {
    if (item.timeslot === "FR") {
      // Only include FR if time >= 16:20 (4:20 PM IST)
      return currentHour > 16 || (currentHour === 16 && currentMinute >= 20);
    }
    if (item.timeslot === "SR") {
      // Only include SR if time >= 17:20 (5:20 PM IST)
      return currentHour > 17 || (currentHour === 17 && currentMinute >= 20);
    }
    return false;
  });

  // Keep other fields same (no change to response structure)
  return res.status(200).json(
    new ApiResponse(200, filteredResult, "Today's result fetched successfully")
  );
});


const getMonthlyResults = asyncHandler(async (req, res) => {
  const { month, year } = req.body;


  if (!month || !year) {
    throw new ApiError(400, "Month and year are required");
  }

  const monthNum = Number(month);
  const yearNum = Number(year);

  if (isNaN(monthNum) || isNaN(yearNum)) {
    throw new ApiError(400, "Month and year must be valid numbers");
  }

  
  const results = await Result.find(
    { month: monthNum, year: yearNum },
    { day: 1, month: 1, year: 1, results: 1, _id: 0 } 
  )
    .sort({ day: 1 }) 
    .lean();

  if (!results || results.length === 0) {
    throw new ApiError(404, "No results found for the given month and year");
  }


  return res
    .status(200)
    .json(new ApiResponse(200, results, "Monthly results fetched successfully"));
});

const getLastThreeMonthsResults = asyncHandler(async (req, res) => {
  const today = new Date();
  const currentMonth = today.getUTCMonth() + 1; // 1–12
  const currentYear = today.getUTCFullYear();

  const months = [];
  for (let i = 0; i < 3; i++) {
    let month = currentMonth - i;
    let year = currentYear;

    if (month <= 0) {
      month += 12; 
      year -= 1;
    }

    months.push({ month, year });
  }

  const query = {
    $or: months.map(({ month, year }) => ({ month, year })),
  };

  const results = await Result.find(
    query,
    { day: 1, month: 1, year: 1, results: 1, _id: 0 }
  )
    .sort({ year: -1, month: -1, day: -1 })
    .lean();

  if (!results || results.length === 0) {
    throw new ApiError(404, "No results found for the last 3 months");
  }

  return res.status(200).json(
    new ApiResponse(200, results, "Results of the last 3 months fetched successfully")
  );
});





export {updateFRresult,updateSRresult,getTodaysResult,getMonthlyResults,getLastThreeMonthsResults}