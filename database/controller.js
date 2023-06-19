
/** Controller */

import Matrizes from "@/model/matriz"

export async function getMatrizes(req, res) {
    try {
        const matrizes = await Matrizes.find({})

        if (!matrizes) return res.status(404).json({ error: "Dados não encontrados" })
        res.status(200).json(matrizes)
    } catch (error) {
        res.status(404).json({ error: "Error while fetching data" })
    }
}