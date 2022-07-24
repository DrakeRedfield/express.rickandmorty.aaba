import mongoose from "mongoose"

export const conectoToMongoDB = () => {
  mongoose.connect(process.env.MONGODB_URI!, (error) => {
    if (error) throw error;
    console.log('[mongodb]: Connection Success')
  }
  );
}