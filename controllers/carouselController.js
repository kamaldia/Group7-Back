import Carousel from "../models/carouselModel.js";
import mongoose from "mongoose";

//Get all
export const getAllCarousels = async (req, res) => {
  try {
    const carousels = await Carousel.find({}).sort({ createdAt: -1 });
    res.status(200).json(carousels);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Carousels" });
  }
};

//get Single
export const getCarouselById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not valid id" });
  }

  try {
    const carousel = await Carousel.findById({ _id: id });
    if (!carousel) {
      return res.status(404).json({ error: "carousel not found" });
    }
    res.status(200).json(carousel);
  } catch (error) {
    res.status(500).json({ error: "Error fetching carousel" });
  }
};

//Create new
export const createCarousel = async (req, res) => {
  try {
    const newcarousel = new Carousel(req.body);
    newcarousel.image = req.file.path;

    const savedcarousel = await newcarousel.save();
    res.status(201).json(savedcarousel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete Single
export const deleteCarousel = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not valid id" });
  }

  try {
    const deletedcarousel = await Carousel.findByIdAndDelete({ _id: id });
    if (!deletedcarousel) {
      return res.status(404).json({ error: "carousel not found" });
    }
    res.json(deletedcarousel);
  } catch (error) {
    res.status(500).json({ error: "Error deleting the carousel" });
  }
};

//update
export const updateCarousel = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not valid id" });
  }
  try {
    const upcarousel = req.body;
    if (req.file) {
      upcarousel.image = req.file.path;
    }
    const updatedcarousel = await Carousel.findByIdAndUpdate(id, upcarousel);

    if (!updatedcarousel) {
      return res.status(404).json({ error: "carousel not found" });
    }

    res.json(updatedcarousel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
