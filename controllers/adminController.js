import Admin from "../models/adminModel.js";

const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    if (password === admin.password) {
      res.status(200).json(admin);
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
    const newAdmin = new Admin(req.body);
    const savedAdmin = await newAdmin.save();
    res.status(201).json(savedAdmin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create a new admin" });
  }
};

// Get all
const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({}).sort({ createdAt: -1 });
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
    const admin = await Admin.findById(id);

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
    const existingAdmin = await Admin.findById(id);

    if (!existingAdmin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    const updatedAdmin = await Admin.findByIdAndUpdate(id, req.body);

    if (!updatedAdmin) {
      return res.status(404).json({ error: "Failed to update admin" });
    }

    res.status(200).json(updatedAdmin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update the admin" });
  }
};

// Delete an admin by ID
const deleteAdmin = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedAdmin = await Admin.findByIdAndDelete(id);

    if (!deletedAdmin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    res.status(204).json(deletedAdmin);
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
