import dns from "dns";
import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use("/api",chatRoutes);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });