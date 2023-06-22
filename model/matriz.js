import mongoose from 'mongoose';
import { Schema, models, model } from 'mongoose';


const matrizSchema = new Schema({
    numero: Number,
    nome: String,
    caracteristica: String,
    dataNascimento: Date,
    proprietario: String,
    situacao: String,
    nomePai: String,
    situacaoMae: String,
    nomeMae: String

})

const Matrizes = model('matriz', matrizSchema)
export default Matrizes;