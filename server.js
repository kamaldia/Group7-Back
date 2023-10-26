import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api", productRoutes);
app.use("/api", categoryRoutes);

app.listen(PORT, () => {
  console.log("Connected to MongoDB & Listening for requests on port", PORT);
});
