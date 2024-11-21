import express from "express";
import {
  getMyProfile,
  login,
  newUser,
} from "../controllers/user.controller.js";
import { singlrAvatar } from "../middlewares/multer.js";
const router = express.Router();

router.post("/new", singlrAvatar, newUser);
router.post("/login", login);
router.get("/me", getMyProfile);
export default router;
