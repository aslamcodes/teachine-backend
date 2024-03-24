import mongoose from "mongoose";

const slidesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: [String],
    required: true,
  },
  recording: {
    type: [
      {
        slideState: String,
        timeDelta: Number,
      },
    ],
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Slides = mongoose.model("Slides", slidesSchema);

export default Slides;
