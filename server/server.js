import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import authRoutes from "../server/routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import messageRoutes from "../server/routes/message.routes.js";
import userRoutes from '../server/routes/user.routes.js'

const app = express();
const PORT = process.env.PORT || 500;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is running here!");
});

app.listen(PORT, () => {
  connectMongoDB();
  console.log(`server running on port ${PORT}`);
});
