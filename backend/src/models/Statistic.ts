import mongoose from "mongoose";

const statisticSchema = new mongoose.Schema({
  page: String,
  visits: Number,
  createdAt: { type: Date, default: Date.now },
});

export const Statistic = mongoose.model("Statistic", statisticSchema);
