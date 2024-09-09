import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Error connection to mongoDB", error.message);
  }
};

export default connectMongoDB;
