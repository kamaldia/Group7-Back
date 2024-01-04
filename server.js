import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import carouselRoutes from "./routes/carouselRoutes.js";
import advertisementRoutes from "./routes/advertisementRoutes.js";
import shopRouter from './routes/shopRoutes.js'
import sequelize from "./config/connection.js";
import cors from "cors";
import bodyParser from "body-parser";
import './associations.js'
import User from "./models/userModel.js";

dotenv.config();

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

//loggedin user
app.use(async (req,res,next)=>{
  const auth_header = req.headers["authorization"];
  console.log("this is auth headers in server: ", auth_header)
  if (!auth_header){
    return res.status(401).send("no authorization header")
  }
  const token_split = auth_header.split(" ");
  const token = token_split[1];
  const decoded_token = jwt.decode(token);
  const user_id = decoded_token.sub;
  const user = await User.findByPk(user_id)
  if(!user){
    return res.status(404).json({message:'User not found'});
  }
  req.user = user
  return next()
})

//routes

app.use("/api/product", productRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);
app.use("/api/contactUs", contactRoutes);
app.use("/api/carousel", carouselRoutes);
app.use("/api/advertisement", advertisementRoutes);
app.use('/api/shop',shopRouter)


sequelize.sync({ force: false });


app.listen(PORT, () => {
  console.log("Connected to DB & Listening for requests on port", PORT);
});