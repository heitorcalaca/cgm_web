import mongoose from 'mongoose';

const connectMongo = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI);
        if (connection.readyState === 1) {
            console.log("Banco Conectado");
        } else {
            throw new Error('Failed to connect to MongoDB');
        }
    } catch (error) {
        throw new Error('Failed to connect to MongoDB');
    }
};

export default connectMongo;
