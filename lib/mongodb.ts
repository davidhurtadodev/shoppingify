import mongoose from 'mongoose';

const uri = process.env.DB_URI;

if (!uri) {
  throw new Error('Add Mongo URI to .env.local');
}

const connectMongo = async () => {
  console.log(uri);
  return await mongoose.connect(uri!);
};

export default connectMongo;
