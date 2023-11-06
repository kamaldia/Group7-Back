import Advertisement from "../models/advertisementModel.js";
import mongoose from "mongoose";

//Get all
export const getAllAdvertisements = async (req, res) => {
  try {
    const Advertisements = await Advertisement.find({}).sort({ createdAt: -1 });
    res.status(200).json(Advertisements);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Advertisements" });
  }
};

//get Single
export const getAdvertisementById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not valid id" });
  }

  try {
    const Advertisement = await Advertisement.findById({ _id: id });
    if (!Advertisement) {
      return res.status(404).json({ error: "Advertisement not found" });
    }
    res.status(200).json(Advertisement);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Advertisement" });
  }
};

//Create new
export const createAdvertisement = async (req, res) => {
  try {
    const newAdvertisement = new Advertisement(req.body);
    newAdvertisement.image = req.file.path;

    const savedAdvertisement = await newAdvertisement.save();
    res.status(201).json(savedAdvertisement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete Single
export const deleteAdvertisement = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not valid id" });
  }

  try {
    const deletedAdvertisement = await Advertisement.findByIdAndDelete({
      _id: id,
    });
    if (!deletedAdvertisement) {
      return res.status(404).json({ error: "Advertisement not found" });
    }
    res.json(deletedAdvertisement);
  } catch (error) {
    res.status(500).json({ error: "Error deleting the Advertisement" });
  }
};

//update
export const updateAdvertisement = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not valid id" });
  }
  try {
    const upAdvertisement = req.body;
    if (req.file) {
      upAdvertisement.image = req.file.path;
    }
    const updatedAdvertisement = await Advertisement.findByIdAndUpdate(
      id,
      upAdvertisement
    );

    if (!updatedAdvertisement) {
      return res.status(404).json({ error: "Advertisement not found" });
    }

    res.json(updatedAdvertisement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
