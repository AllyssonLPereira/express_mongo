import mongoose from "mongoose";

async function connectInDataBase() {
    mongoose.connect("mongodb+srv://allysson:O8xr65Y4TD7Fz5s1@cluster0.h9qfz.mongodb.net/lib?appName=Cluster0");

    return mongoose.connection;
}; 

export default connectInDataBase;