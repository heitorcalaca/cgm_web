import connectMongo from "@/database/conn";
import { deleteMatriz, getMatriz, putMatriz } from "@/database/controller";

export default async function handler(req, res) {
    try {
        await connectMongo()

        // Type of request
        const { method } = req;

        switch (method) {
            case "GET":
                await getMatriz(req, res)
                break;
            case "PUT":
                await putMatriz(req, res);
                break;
            case "DELETE":
                await deleteMatriz(req, res);
                break;
            default:
                res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
                res.status(405).end(`Method ${method} Not Allowed`);
                break;
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to connect to MongoDB" });
    }
}