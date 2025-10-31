import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Result } from "../models/result.models.js";

const updateFRresult = asyncHandler(async (req, res) => {
  const { date, city, result, time } = req.body;

 
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

  const IST_OFFSET = 5.5 * 60 * 60 * 1000;
  const normalizedDate = new Date(inputDate.getTime() + IST_OFFSET);
  normalizedDate.setHours(0, 0, 0, 0);

  const day = normalizedDate.getDate();
  const month = normalizedDate.getMonth() + 1;
  const year = normalizedDate.getFullYear();

  function convertTo24Hour(timeStr) {
    if (!timeStr) return "16:20";

    const match = timeStr
      .trim()
      .match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);

    if (!match) {
      throw new ApiError(
        400,
        "Invalid time format. Use format like '4:20 PM' or '10:05 AM'."
      );
    }

    let [, hours, minutes, period] = match;
    hours = parseInt(hours);
    minutes = parseInt(minutes);

    if (period.toUpperCase() === "PM" && hours !== 12) hours += 12;
    if (period.toUpperCase() === "AM" && hours === 12) hours = 0;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }

  const resultTime = convertTo24Hour(time || "4:20 PM");

  let updatedFRresult = await Result.findOneAndUpdate(
    { day, month, year, "results.timeslot": "FR" },
    {
      $set: {
        "results.$.number": result.number,
        "results.$.time": resultTime,
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
          results: { timeslot: "FR", number: result.number, time: resultTime },
        },
      },
      { upsert: true, new: true }
    );
  }

  return res
    .status(201)
    .json(
      new ApiResponse(201, updatedFRresult, "FR result updated successfully")
    );
});

const updateSRresult = asyncHandler(async (req, res) => {
  const { date, city, result, time } = req.body;

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

  const IST_OFFSET = 5.5 * 60 * 60 * 1000; 
  const normalizedDate = new Date(inputDate.getTime() + IST_OFFSET);
  normalizedDate.setHours(0, 0, 0, 0);

  const day = normalizedDate.getDate();
  const month = normalizedDate.getMonth() + 1;
  const year = normalizedDate.getFullYear();

  function convertTo24Hour(timeStr) {
    if (!timeStr) return "17:20"; 

    const match = timeStr
      .trim()
      .match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);

    if (!match) {
      throw new ApiError(
        400,
        "Invalid time format. Use format like '5:20 PM' or '10:05 AM'."
      );
    }

    let [, hours, minutes, period] = match;
    hours = parseInt(hours);
    minutes = parseInt(minutes);

    if (period.toUpperCase() === "PM" && hours !== 12) hours += 12;
    if (period.toUpperCase() === "AM" && hours === 12) hours = 0;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }

  const resultTime = convertTo24Hour(time || "5:20 PM");

  let updatedSRresult = await Result.findOneAndUpdate(
    { day, month, year, "results.timeslot": "SR" },
    {
      $set: {
        "results.$.number": result.number,
        "results.$.time": resultTime,
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
          results: { timeslot: "SR", number: result.number, time: resultTime },
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
  
  const now = new Date();
  const indiaTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  const currentHour = indiaTime.getHours();
  const currentMinute = indiaTime.getMinutes();

  const day = indiaTime.getDate();
  const month = indiaTime.getMonth() + 1;
  const year = indiaTime.getFullYear();

  const todayResult = await Result.findOne({ day, month, year });

  if (!todayResult) {
    throw new ApiError(404, "No result found for today's date");
  }

  const filteredResult = JSON.parse(JSON.stringify(todayResult));

  function isTimePassed(resultTime) {
    const [resHour, resMinute] = resultTime.split(":").map(Number);
    return (
      currentHour > resHour || (currentHour === resHour && currentMinute >= resMinute)
    );
  }

  filteredResult.results = todayResult.results.filter((item) => {
    if (!item.time) return false; 
    return isTimePassed(item.time); 
  });

  if (filteredResult.results.length === 0) {
    return res.status(200).json(
      new ApiResponse(200, null, "Results not yet available for today")
    );
  }

  return res
    .status(200)
    .json(
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

  const now = new Date();
  const indiaTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );
  const currentDay = indiaTime.getDate();
  const currentMonth = indiaTime.getMonth() + 1;
  const currentYear = indiaTime.getFullYear();
  const currentHour = indiaTime.getHours();
  const currentMinute = indiaTime.getMinutes();

  function isTimePassed(resultTime) {
    const [resHour, resMinute] = resultTime.split(":").map(Number);
    return (
      currentHour > resHour ||
      (currentHour === resHour && currentMinute >= resMinute)
    );
  }

  const results = await Result.find(
    { month: monthNum, year: yearNum },
    { day: 1, month: 1, year: 1, results: 1, _id: 0 }
  )
    .sort({ day: -1 })
    .lean();

  if (!results || results.length === 0) {
    throw new ApiError(404, "No results found for the given month and year");
  }

  const filteredResults = results.map((entry) => {
    if (yearNum < currentYear || monthNum < currentMonth) return entry;

    if (yearNum === currentYear && monthNum === currentMonth) {

      if (entry.day < currentDay) return entry;

      if (entry.day === currentDay) {
        const visibleResults = entry.results.filter((r) => {
          if (!r.time) return false;
          return isTimePassed(r.time);
        });

        return { ...entry, results: visibleResults };
      }

      return null;
    }

    return null;
  }).filter(Boolean);

  return res.status(200).json(
    new ApiResponse(
      200,
      filteredResults,
      "Monthly results fetched successfully"
    )
  );
});


const getLastThreeMonthsResults = asyncHandler(async (req, res) => {

  const now = new Date();
  const indiaTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  const currentDay = indiaTime.getDate();
  const currentMonth = indiaTime.getMonth() + 1;
  const currentYear = indiaTime.getFullYear();
  const currentHour = indiaTime.getHours();
  const currentMinute = indiaTime.getMinutes();


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

  const query = { $or: months.map(({ month, year }) => ({ month, year })) };

  const results = await Result.find(
    query,
    { day: 1, month: 1, year: 1, results: 1, _id: 0 }
  )
    .sort({ year: -1, month: -1, day: -1 })
    .lean();

  if (!results || results.length === 0) {
    throw new ApiError(404, "No results found for the last 3 months");
  }

  function isTimePassed(resultTime) {
    const [resHour, resMinute] = resultTime.split(":").map(Number);
    return (
      currentHour > resHour ||
      (currentHour === resHour && currentMinute >= resMinute)
    );
  }

  const filteredResults = results
    .map((entry) => {
      const { day, month, year } = entry;

      if (year < currentYear || month < currentMonth) return entry;

      if (year === currentYear && month === currentMonth) {
     
        if (day < currentDay) return entry;

        if (day === currentDay) {
          const visibleResults = entry.results.filter((r) => {
            if (!r.time) return false;
            return isTimePassed(r.time);
          });
          return { ...entry, results: visibleResults };
        }

        return null;
      }

      return null;
    })
    .filter(Boolean);

  return res.status(200).json(
    new ApiResponse(
      200,
      filteredResults,
      "Results of the last 3 months fetched successfully"
    )
  );
});



export {updateFRresult,updateSRresult,getTodaysResult,getMonthlyResults,getLastThreeMonthsResults}