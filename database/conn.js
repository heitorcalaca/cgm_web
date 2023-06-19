import mongoose from 'mongoose'

const MONGO_URI = "mongodb+srv://admin:admin123@bancocgm.rnmcadw.mongodb.net/?retryWrites=true&w=majority"

const connectMongo = async () => {
    try {
        const { connection } = await mongoose.connect(MONGO_URI)
        if (connection.readyState == 1) {
            console.log("Banco Conectado")
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

export default connectMongo;