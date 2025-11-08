import mongoose from 'mongoose';

const connectDB = async () => {
    if (mongoose.connection.readyState) {
        return;
    }
    await mongoose.connect('mongodb://localhost:27017/products');
};

export default connectDB;
