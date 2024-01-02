import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import carouselRoutes from "./routes/carouselRoutes.js";
import advertisementRoutes from "./routes/advertisementRoutes.js";
import sequelize from "./config/connection.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
sequelize.sync({force:false});

const PORT = process.env.PORT || 8000;
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("./"));
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/product", productRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);
app.use("/api/contactUs", contactRoutes);
app.use("/api/carousel", carouselRoutes);
app.use("/api/advertisement", advertisementRoutes);

app.listen(PORT, () => {
  console.log("Connected to DB & Listening for requests on port", PORT);
});