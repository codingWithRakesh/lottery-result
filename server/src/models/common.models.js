import mongoose from "mongoose";

const commonNumberSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      unique: true,
    },
    day: {
      type: Number,
      required: true,
    },
    month: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },

    common: {
      FR: {
        Direct: { type: String },
        House: { type: String },
        Ending: { type: String },
        time: { type: String, default: "16:20" },
      },
      SR: {
        Direct: { type: String },
        House: { type: String },
        Ending: { type: String },
        time: { type: String, default: "17:20" },
      },
    },
  },
  { timestamps: true }
);

export const commonNumber = mongoose.model("commonNumber", commonNumberSchema);
