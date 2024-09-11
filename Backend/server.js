import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/authRoutes.js";

dotenv.config();
const app = express();

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

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
