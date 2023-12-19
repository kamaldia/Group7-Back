import { Admin } from "../models/adminModel.js";

const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ where: { username } });

    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    if (password === admin.password) {
      res.status(200).json({ status: "ok", data: admin });
    } else {
      res.status(401).json({ error: "Incorrect password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve the admin" });
  }
};

// Create a new admin
const createAdmin = async (req, res) => {
  try {
    const newAdmin = await Admin.create(req.body);
    res.status(201).json(newAdmin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create a new admin" });
  }
};

// Get all
const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll({ order: [["createdAt", "DESC"]] });
    res.status(200).json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve admin users" });
  }
};

// Get by ID
const getAdminById = async (req, res) => {
  const id = req.params.id;

  try {
    const admin = await Admin.findByPk(id);

    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve the requested admin" });
  }
};

// Update
const updateAdmin = async (req, res) => {
  const id = req.params.id;

  try {
    const [updated] = await Admin.update(req.body, { where: { id } });

    if (!updated) {
      return res.status(404).json({ error: "Failed to update admin" });
    }

    const updatedAdmin = await Admin.findOne({ where: { id } });
    res.status(200).json({ message: "Admin updated", updatedAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update the admin" });
  }
};

// Delete an admin by ID
const deleteAdmin = async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await Admin.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: "Admin not found" });
    }

    res.status(204).json({ message: "Admin deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete the admin" });
  }
};

export {
  createAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
  loginAdmin,
};
