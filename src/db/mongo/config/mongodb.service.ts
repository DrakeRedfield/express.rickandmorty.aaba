import mongoose from "mongoose"

class MongoDBService {
  connect() {
    mongoose.connect(process.env.MONGODB_URI!, (error) => {
      if (error) throw error;
      console.log('[mongodb]: Connection Success')
    });
  }

  disconnect() {
    return mongoose.connection.close();
  }
}

export const mongoService = new MongoDBService()