import connectMongo from "@/database/conn";
import { deleteMatrizes, getMatrizes, postMatrizes, putMatrizes } from "@/database/controller";

export default async function handler(req, res) {
    try {
        await connectMongo(); // Wait for the connection to be established

        const { method } = req;

        switch (method) {
            case "GET":
                await getMatrizes(req, res);
                break;
            case "POST":
                await postMatrizes(req, res);
                break;
            case "PUT":
                await putMatrizes(req, res);
                break;
            case "DELETE":
                await deleteMatrizes(req, res);
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

