import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://hda689747:naveen123@cluster0.ezbkydf.mongodb.net/?retryWrites=true&w=majority"
    );
    if (db.Connection) {
      console.log("MongoDB Connected");
    }
    if (db.disconnect()) {
      console.log("db disconnected");
    }
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDb;
