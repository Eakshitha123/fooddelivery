import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://sumithra:12345678abc@cluster0.8zmox.mongodb.net/Food-App').then(()=>console.log("DB Connected"));
}

