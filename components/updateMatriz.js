"use client"

import { useReducer } from "react"
import Sucesso from "./sucesso"
import Erro from "./erro"
import { useQueries, useQuery } from "react-query"
import { getMatriz } from "@/database/controller"



export default function FormularioUpdateMatriz({ formId, formData, setFormData }) {

    const { isLoading, isError, data, error } = useQuery(['matriz', formId], () => getMatriz(formId))

    if (isLoading) return <div className="">Carregando Matriz...</div>
    if (isError) return <div>Algo deu errado!</div>

    const { numero, nome, caracteristica, dataNascimento, proprietario, situacao, nomePai, situacaoMae, nomeMae } = data

    const handleSubmit = (e) => {

        e.preventDefault();
        if (Object.keys(formData).length == 0) return console.log("Formulário sem dados")
        console.log(formData)
    }



    return (
        < form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 w-4/6 gap-4">
                <div className="input-type">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="numero" >
                        Número
                    </label>
                    <input id="numero" type="number" onChange={setFormData} defaultValue={numero} name="numero" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Número" />
                </div>

                <div className="input-type">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nome" >
                        Nome
                    </label>
                    <input id="nome" type="text" onChange={setFormData} defaultValue={nome} name="nome" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Nome" />
                </div>

                <div>
                    <div className="form-check">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="car" >
                            Característica
                        </label>
                        <select id="car" name="características" onChange={setFormData} defaultValue={caracteristica} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" >
                            <option defaultValue={0}>Selecione a Característica</option>
                            <option value="Amarela">Amarela</option>
                            <option value="Amarela Mocha">Amarela Mocha</option>
                        </select>
                    </div>
                </div>

                <div className="input-type">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="date" >
                        Data de nascimento
                    </label>
                    <input id="date" type="date" onChange={setFormData} defaultValue={dataNascimento} name="dataNascimento" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Nome" />
                </div>

                <div className="input-type">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="prop">
                        Proprietário
                    </label>
                    <input id="prop" type="text" onChange={setFormData} defaultValue={proprietario} name="proprietario" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Nome do Proprietário" />
                </div>

                <div>
                    <div className="form-check">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="sit">
                            Situação
                        </label>
                        <select id="sit" name="situacao" onChange={setFormData} defaultValue={situacao} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" >
                            <option defaultValue={0}>Selecione a Situação</option>
                            <option value="normal">Normal</option>
                            <option value="morreu">Morreu</option>
                            <option value="sumiu">Sumiu</option>
                            <option value="vendeu">Vendeu</option>
                        </select>
                    </div>
                </div>

                <div className="input-type">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nomep" >
                        Nome do Pai
                    </label>
                    <input id="nomep" type="text" onChange={setFormData} defaultValue={nomePai} name="nomePai" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Nome da Mãe" />
                </div>

                <div>
                    <div className="form-check">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="sitm">
                            Situação da mãe
                        </label>
                        <select id="sitm" name="situacaoMae" onChange={setFormData} defaultValue={situacaoMae} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" >
                            <option defaultValue={0}>Selecione a Situação</option>
                            <option value="normal">Normal</option>
                            <option value="morreu">Morreu</option>
                            <option value="sumiu">Sumiu</option>
                            <option value="vendeu">Vendeu</option>
                        </select>
                    </div>
                </div>

                <div className="input-type">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nomem">
                        Nome da mãe
                    </label>
                    <input id="nomem" type="text" onChange={setFormData} defaultValue={nomeMae} name="nomeMae" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Nome da Mãe" />
                </div>
            </div>
            <div className="w-4/6 pt-4">
                <button className="justify-center text-md w-full bg-yellow-400 border rounded py-3 px-2 text-gray-600">
                    Editar
                </button>
            </div>
        </form >
    )
}