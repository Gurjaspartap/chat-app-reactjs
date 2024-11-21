import express from "express";
import userRoutes from "./routes/user.routes.js";
import { connectDb } from "./utils/features.js";
import "dotenv/config";
import { errorMiddleware } from "./middlewares/error.js";
const app = express();
// using middleware
app.use(express.json());
const PORT = process.env.PORT || 3000;
connectDb(process.env.MONGO_URI);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
