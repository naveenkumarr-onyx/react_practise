import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hda689747:naveen123@cluster0.ezbkydf.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("DB CONNECTED");
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDb;
