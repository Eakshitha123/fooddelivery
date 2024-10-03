import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js"; // Ensure correct path here
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'

// Initialize app
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to database
connectDB();

// api endpoints
app.use("/api/food", foodRouter); 
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter)

app.get("/", (req, res) => {
    res.send("API Working");
});


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
