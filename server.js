import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import carouselRoutes from "./routes/carouselRoutes.js";
import advertisementRoutes from "./routes/advertisementRoutes.js";
import sequelize from "./config/connection.js";
import cors from "cors";

dotenv.config();
sequelize.sync();

const PORT = process.env.PORT || 8001;
const app = express();
app.use(express.static("./"));
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", blogRoutes);
app.use("/api", adminRoutes);
app.use("/api", contactRoutes);
app.use("/api", carouselRoutes);
app.use("/api", advertisementRoutes);

app.listen(PORT, () => {
  console.log("Connected to DB & Listening for requests on port", PORT);
});
