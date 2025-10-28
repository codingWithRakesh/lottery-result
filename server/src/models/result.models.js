import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    date: {     //this tells we can add only onedocumet for a bay but later we can update the numbers or results
      type: Date,
      required: true,
      unique: true, 
    },
    city:{
        type:String,
        required:true
    },
    day: {
      type: Number,
      required: true,
      index:true
    },
    month: {
      type: Number,
      required: true,
      index:true
    },
    year: {
      type: Number,
      required: true,
      index:true
    },
    results: [
      {
        type: {
          type: String,
          enum: {
            values: ["FR", "SR"],
            message: "{VALUE} is not a valid result type.",
          },
          required: true,
        },
        numbers: String,
        time: String,
      },
    ],
  },
  { timestamps: true }
);

export const Result = mongoose.model("Result", resultSchema);
