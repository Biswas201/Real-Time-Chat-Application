import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/authRoutes.js";
import msgRoute from "./routes/msgRoute.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

//database connect
mongoose
  .connect(process.env.Database_Uri)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

//routes
app.use("/api/auth", authRoute);
app.use("/api/message", msgRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

// error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
