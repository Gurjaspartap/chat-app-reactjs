import { compare } from "bcrypt";
import { User } from "../models/user.model.js";
import { sendToken } from "../utils/features.js";
import { tryCatch } from "../middlewares/error.js";
//create new user and save it to database and save in cookies
const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;
  console.log("req.body", req.body);
  try {
    const avatar = {
      public_id: "samplePublicId", // Example public_id, replace as needed
      url: "https://example.com/avatar.jpg", // Example URL, replace with a valid URL
    };

    // Creating the user
    const user = await User.create({
      name: name,
      username: username,
      password: password,
      avatar: avatar,
      bio: bio,
    });

    // Sending a success response back to the client
    sendToken(res, user, 201, "User created successfully");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
};

const login = tryCatch(async (req, res, next) => {
  const { username, password } = req.body;
  console.log("username", username);
  console.log("password", password);
  const user = await User.findOne({ username }).select("+password");
  if (!user) {
    return next(new Error("Invalid password"));
  }
  const isMatch = await compare(password, user.password);
  if (!isMatch) {
    return next(new Error("Invalid password"));
  }
  sendToken(res, user, 200, `Welcome Back ${user.name}`);
});
const getMyProfile = async (req, res) => {
  res.status(200).json({ success: true, user: req.user });
};

export { login, newUser, getMyProfile };
