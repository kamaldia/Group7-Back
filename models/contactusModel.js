import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    contactName: {
      type: String,
      required: [true, "Name is required"],
    },
    contactEmail: {
      type: String,
      required: [true, "Email is required"],
    },
    contactMessage: {
      type: String,
      required: [true, "Message is required"],
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
