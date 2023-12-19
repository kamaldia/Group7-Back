import { Carousel } from "../models/carouselModel.js";

//Get all
export const getAllCarousels = async (req, res) => {
  try {
    const carousels = await Carousel.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(carousels);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Carousels" });
  }
};

//get Single
export const getCarouselById = async (req, res) => {
  const { id } = req.params;

  try {
    const carousel = await Carousel.findByPk(id);
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
    const newcarousel = {
      ...req.body,
      image: req.file.path,
    };

    const savedcarousel = await Carousel.create(newcarousel);
    res.status(201).json(savedcarousel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete Single
export const deleteCarousel = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedcarousel = await Carousel.destroy({ where: { id } });
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

  try {
    const upcarousel = {
      ...req.body,
      image: req.file ? req.file.path : undefined,
    };

    const [updated] = await Carousel.update(upcarousel, { where: { id } });

    if (!updated) {
      return res.status(404).json({ error: "carousel not found" });
    }

    const updatedcarousel = await Carousel.findByPk(id);
    res.json(updatedcarousel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
