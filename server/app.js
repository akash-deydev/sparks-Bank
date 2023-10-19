import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import transferRoutes from "./routes/transferRoutes.js";
import connectToMongoDB from "./config/dbConnect.js";

dotenv.config();

const PORT = process.env.PORT || 9000;

// express server
const app = express();

// MongoDB Connection
connectToMongoDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/bank", userRoutes);
app.use("/api/v1/bank", transferRoutes);

// Default route
app.get("/", (req, res) => {
  res.json("Hello From express 😎");
});

// listening
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
