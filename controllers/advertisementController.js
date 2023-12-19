import { Advertisement } from "../models/advertisementModel.js";

//Get all
export const getAllAdvertisements = async (req, res) => {
  try {
    const advertisements = await Advertisement.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(advertisements);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Advertisements" });
  }
};

//get Single
export const getAdvertisementById = async (req, res) => {
  const { id } = req.params;

  try {
    const advertisement = await Advertisement.findByPk(id);
    if (!advertisement) {
      return res.status(404).json({ error: "Advertisement not found" });
    }
    res.status(200).json(advertisement);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Advertisement" });
  }
};

//Create new
export const createAdvertisement = async (req, res) => {
  try {
    const newAdvertisement = req.body;
    newAdvertisement.image = req.file.path;

    const savedAdvertisement = await Advertisement.create(newAdvertisement);
    res.status(201).json(savedAdvertisement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete Single
export const deleteAdvertisement = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Advertisement.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "Advertisement not found" });
    }
    res.json({ message: "Advertisement deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting the Advertisement" });
  }
};

//update
export const updateAdvertisement = async (req, res) => {
  const { id } = req.params;

  try {
    const upAdvertisement = req.body;
    if (req.file) {
      upAdvertisement.image = req.file.path;
    }
    const [updated] = await Advertisement.update(upAdvertisement, {
      where: { id },
    });

    if (!updated) {
      return res.status(404).json({ error: "Advertisement not found" });
    }

    const updatedAdvertisement = await Advertisement.findOne({ where: { id } });
    res.json({ message: "Advertisement updated", updatedAdvertisement });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
