import express from "express";
import {
  createContact,
  getContacts,
  getContactById,
  deleteContact,
} from "../controllers/ContactContoller.js";

const router = express.Router();

// Create a new contact
router.post("/", createContact);

// Get all contacts
router.get("/", getContacts);

// Get a specific contact by ID
router.get("/:id", getContactById);

// Delete a contact by ID
router.delete("/:id", deleteContact);

export default router;
