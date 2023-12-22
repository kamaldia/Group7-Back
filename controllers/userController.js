import  User  from "../models/userModel.js";
import bcrypt from 'bcrypt'

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const match = bcrypt.compare(password,user.password)

    if (match) {
      res.status(200).json({ status: "ok", data: user });
    } else {
      res.status(401).json({ error: "Incorrect password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve the user" });
  }
};

// Create a new user
const createUser = async (req, res) => {
  const {username,password} = req.body
  try {
    const hashedPassword = await bcrypt.hash(password,12)
    const newUser = await User.create({username,hashedPassword});
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create a new user" });
  }
};

// Get all
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ order: [["createdAt", "DESC"]] });
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve user users" });
  }
};

// Get by ID
const getUserById = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve the requested user" });
  }
};

// Update
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

// Delete an user by ID
const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await User.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(204).json({ message: "User deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete the user" });
  }
};

export {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
};
