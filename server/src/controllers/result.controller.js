import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Result } from "../models/result.models.js";

const updateFRresult = asyncHandler(async (req, res) => {
  const { date, city, result } = req.body;

  const fields = { date, city, result };
  Object.entries(fields).forEach(([key, value]) => {
    if (!value) {
      throw new ApiError(400, `${key} cannot be empty as it is required`);
    }
  });

  const inputDate = new Date(date);
  if (isNaN(inputDate)) {
    throw new ApiError(400, "Invalid date format");
  }

  const normalizedDate = new Date(Date.UTC(
    inputDate.getUTCFullYear(),
    inputDate.getUTCMonth(),
    inputDate.getUTCDate()
  ));

  const day = inputDate.getUTCDate();
  const month = inputDate.getUTCMonth() + 1;
  const year = inputDate.getUTCFullYear();

  let createdFRresult = await Result.findOneAndUpdate(
    { date: normalizedDate, "results.timeslot": "FR" },
    {
      $set: {
        "results.$.number": result.number,
        "results.$.time": "16:20",
      },
    },
    { new: true }
  );

  if (!createdFRresult) {
    createdFRresult = await Result.findOneAndUpdate(
      { date: normalizedDate },
      {
        $setOnInsert: { day, month, year, city },
        $push: {
          results: { timeslot: "FR", number: result.number, time: "16:20" },
        },
      },
      { upsert: true, new: true }
    );
  }

  return res
    .status(201)
    .json(
      new ApiResponse(201, createdFRresult, "FR result updated successfully")
    );
});


const updateSRresult = asyncHandler(async (req, res) => {
  const { date, city, result } = req.body;

  const fields = { date, city, result };
  Object.entries(fields).forEach(([key, value]) => {
    if (!value) {
      throw new ApiError(400, `${key} cannot be empty as it is required`);
    }
  });

  const inputDate = new Date(date);
  if (isNaN(inputDate)) {
    throw new ApiError(400, "Invalid date format");
  }

  const normalizedDate = new Date(Date.UTC(
    inputDate.getUTCFullYear(),
    inputDate.getUTCMonth(),
    inputDate.getUTCDate()
  ));

  const day = inputDate.getUTCDate();
  const month = inputDate.getUTCMonth() + 1;
  const year = inputDate.getUTCFullYear();

  let updatedSRresult = await Result.findOneAndUpdate(
    { date: normalizedDate, "results.timeslot": "SR" },
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
      { date: normalizedDate },
      {
        $setOnInsert: { day, month, year, city },
        $push: {
          results: { timeslot: "SR", number: result.number, time: "17:20" },
        },
      },
      { upsert: true, new: true }
    );
  }

  return res
    .status(201)
    .json(
      new ApiResponse(201, updatedSRresult, "SR result updated successfully")
    );
});

const getTodaysResult = asyncHandler(async (req, res) => {

  const today = new Date();


  const day = today.getDate();
  const month = today.getMonth() + 1; 
  const year = today.getFullYear();

  
  const todayResult = await Result.findOne({ day, month, year });


  if (!todayResult) {
    throw new ApiError(404, "No result found for today's date");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, todayResult, "Today's result fetched successfully"));
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
    .sort({ year: 1, month: 1, day: -1 })
    .lean();

  if (!results || results.length === 0) {
    throw new ApiError(404, "No results found for the last 3 months");
  }

  return res.status(200).json(
    new ApiResponse(200, results, "Results of the last 3 months fetched successfully")
  );
});





export {updateFRresult,updateSRresult,getTodaysResult,getMonthlyResults,getLastThreeMonthsResults}