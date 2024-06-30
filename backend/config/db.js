import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://SuperUser:33018@cluster0.3qo3wj4.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
};