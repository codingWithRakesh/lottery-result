import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      unique: true,
      index: true,
    },
    city: {
      type: String,
      required: true,
    },
    day: {
      type: Number,
      required: true,
      index: true,
    },
    month: {
      type: Number,
      required: true,
      index: true,
    },
    year: {
      type: Number,
      required: true,
      index: true,
    },
    results: [
      {
        _id: false, // 🚫 disables subdocument _id creation
        timeslot: {
          type: String,
          enum: {
            values: ["FR", "SR"],
            message: "{VALUE} is not a valid result type.",
          },
          required: true,
        },
        number: String,
        time: String, // stored in 24-hour format like "16:20"
      },
    ],
  },
  { timestamps: true }
);


export const Result = mongoose.model("Result", resultSchema);
