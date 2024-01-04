import express from "express";
import Verification from '../middlewares/jwt.js';
import {
  createContact,
  getContacts,
  getContactById,
  deleteContact,
} from "../controllers/ContactContoller.js";

const router = express.Router();

// Create a new contact
router.post("/", Verification.verifyLogin, createContact);

// Get all contacts
router.get("/", Verification.verifyLogin, getContacts);

// Get a specific contact by ID
router.get("/:id", Verification.verifyLogin, getContactById);

// Delete a contact by ID
router.delete("/:id", Verification.verifyLogin, deleteContact);

export default router;
