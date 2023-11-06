import mongoose from "mongoose";

const advertisementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "Advertisement title",
    },
    image: {
      type: String,
      required: [true, "Advertisement item image is required"],
    },
  },
  { timestamps: true }
);

const Advertisement = mongoose.model("Advertisement", advertisementSchema);

export default Advertisement;
