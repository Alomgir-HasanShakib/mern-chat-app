import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ err: "Unauthorized - No Token Privided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ err: "Unauthorized - Invalid Token" });
    }

    const user = await User.findById(decoded.userID).select("-password");
    

    if (!user) {
      return res.status(404).json({ err: "User Not Found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectedRoute middleware", error.message);

    res.status(500).json({ err: "Internal server error" });
  }
};

export default protectRoute;
