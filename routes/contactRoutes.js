import express from "express";
import {
  createContact,
  getContacts,
  getContactById,
  deleteContact,
} from "../controllers/ContactContoller.js";

const router = express.Router();

// Create a new contact
router.post("/contacts", createContact);

// Get all contacts
router.get("/contacts", getContacts);

// Get a specific contact by ID
router.get("/contacts/:id", getContactById);

// Delete a contact by ID
router.delete("/contacts/:id", deleteContact);

export default router;
