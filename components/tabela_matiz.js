import dados from '../database/data.json'
import { BiEdit, BiTrash } from "react-icons/bi"

export default function TabelaMatriz() {
    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-600">
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Numero</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Nome</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Proprietário</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Situação</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Ações</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                {
                    dados.map((obj, i) => <Tr{...obj} key={i} />)
                }
            </tbody>
        </table>
    )
}

function Tr({ id, numero, nome, proprietario, situacao }) {
    return (
        <tr className="bg-gray-50 text-center">
            <td className="px-16 py-2 flex flex-row items-center">
                <span className="text-center ml-2 font-semibold">{numero || "Unknown"}</span>
            </td>
            <td className="px-16 py2">
                <span>{nome || "Unknown"}</span>
            </td>
            <td className="px-16 py2">
                <span>{proprietario || "Unknown"}</span>
            </td>
            <td className="px-16 py2">
                <span>{situacao || "Unknown"}</span>
            </td>
            <td className="px-16 py-2 flex justify-around gap-5">
                <button className="cursor"> <BiEdit size={25} color="rgb(34,197,94)" /></button>
                <button className="cursor"> <BiTrash size={25} color="rgb(244,63,94)" /> </button>
            </td>
        </tr>
    )
}