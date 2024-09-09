import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserID = req.user._id;

    const allUser = await User.find({ _id: { $ne: loggedInUserID } }).select(
      "-password"
    );

    res.status(200).json(allUser);
  } catch (error) {
    console.log("Error in getUserForSidebar Controller", error);

    res.status(500).json({ err: "Internal server Error" });
  }
};
