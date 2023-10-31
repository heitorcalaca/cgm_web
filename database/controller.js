/** Controller */

import Matrizes from "../model/matriz";

// GET: http://localhost:3000/api/matrizes
export async function getMatrizes(req, res) {
  try {
    const matrizes = await Matrizes.find({});

    if (!matrizes)
      return res.status(404).json({ error: "Dados não encontrados" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

// GET: http://localhost:3000/api/matrizes/1
export async function getMatriz(req, res) {
  try {
    const { idMatriz } = req.query;

    if (idMatriz) {
      const matriz = await Matrizes.findById(idMatriz);
      res.status(200).json(matriz);
    }
    res.status(404).json({ error: "Nenhuma matriz selecionada...!" });
  } catch (error) {
    res.status(500).json({ error: "Não foi possível encontrar a matriz...!" });
  }
}

// POST: http://localhost:3000/api/matrizes
export async function postMatrizes(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res
        .status(400)
        .json({ error: "Dados de formulário não informados...!" });
    Matrizes.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(404).json({ error: "Error while creating data" });
  }
}

// PUT: http://localhost:3000/api/matrizes/1
export async function putMatrizes(req, res) {
  try {
    const { idMatriz } = req.query;
    const formData = req.body;

    if (idMatriz && formData) {
      await Matrizes.findByIdAndUpdate(idMatriz, formData);
      res.status(200).json(formData);
    } else {
      error = new Error("User not Selected...!");
      res
        .status(404)
        .json({ error: "Matriz não selecionada...!", details: error.message });
    }
  } catch (err) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error while updating data", details: error.message });
  }
}

// DELETE: http://localhost:3000/api/matrizes/1
export async function deleteMatrizes(req, res) {
  try {
    const { idMatriz } = req.query;

    if (idMatriz) {
      const matriz = await Matrizes.findByIdAndDelete(idMatriz);
      return res.status(200).json({ deleted: idMatriz });
    }

    res.status(404).json({ error: "Matriz não selecionada" });
  } catch (error) {
    res.status(500).json({ error: "Error while deleting data" });
  }
}
