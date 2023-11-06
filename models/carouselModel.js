import mongoose from "mongoose";

const carouselSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "carousel title",
    },
    image: {
      type: String,
      required: [true, "Carousel item image is required"],
    },
  },
  { timestamps: true }
);

const Carousel = mongoose.model("Carousel", carouselSchema);

export default Carousel;
