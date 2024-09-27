import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rohitsirse560:896280@cluster0.seiev.mongodb.net/food-del').then(()=>console.log("Data Base Connected"));
}