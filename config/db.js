import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected to mongodb Database ${conn.connection.host} and port is ${process.env.PORT}`
    );
  } catch (error) {
    console.log(`Error in MongoDB ${error}`);
  }
};
export default connectDB;
