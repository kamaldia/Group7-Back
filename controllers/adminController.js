import Admin from "../models/adminModel.js";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";

// Create a new admin
const createAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newAdmin = await User.create({
      username,
      password: hashedPassword,
      role: "admin",
    });
    res.status(201).json(newAdmin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create a new admin" });
  }
};

//create user
const createUser = async (req, res) => {
  const { id, username } = req.body;
  try {
    const newUser = await User.create({ id, username, role: "user" });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create a new user" });
  }
};

// Get all admins only
const getAllAdmins = async (req, res) => {
  try {
    const admins = await User.findAll({
      where: { role: "admin" },
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve admin users" });
  }
};

//get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve user users" });
  }
};

// Get by ID
const getAdminById = async (req, res) => {
  const id = req.params.id;

  try {
    const admin = await User.findByPk(id);

    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve the requested admin" });
  }
};

// Update admin
const updateAdmin = async (req, res) => {
  const id = req.params.id;

  try {
    const [updated] = await User.update(req.body, { where: { id } });

    if (!updated) {
      return res.status(404).json({ error: "Failed to update admin" });
    }

    const updatedUser = await User.findOne({ where: { id } });
    const hashedPassword = await bcrypt.hash(updatedAdmin.password, 12);
    const updatedWithPass = await User.update(
      { username: updatedAdmin.username, password: hashedPassword },
      { where: { id } }
    );
    res.status(200).json({ message: "Admin updated", updatedWithPass });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update the admin" });
  }
};

// Update user
const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const [updated] = await User.update(req.body, { where: { id } });

    if (!updated) {
      return res.status(404).json({ error: "Failed to update user" });
    }

    const updatedUser = await User.findOne({ where: { id } });

    res.status(200).json({ message: "User updated", updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update the user" });
  }
};

// Delete an admin by ID
const deleteAdmin = async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await User.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: "Admin not found" });
    }

    res.status(204).json({ message: "Admin deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete the admin" });
  }
};

export { createAdmin, getAllAdmins, getAdminById, updateAdmin, deleteAdmin, createUser, getAllUsers, updateUser };
