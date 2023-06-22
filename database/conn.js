import mongoose from 'mongoose';

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

    } catch (error) {
        console.error('Fail to connect to MongoDB:', error);
        throw error;
    }
};

export default connectMongo;
