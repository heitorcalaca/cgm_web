import connectMongo from "@/database/conn";

export default function handler(req, res) {
    connectMongo()
    res.status(200).json({ text: 'Hello' });
}