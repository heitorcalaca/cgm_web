import { BiEdit, BiTrash } from "react-icons/bi"
import { getMatrizes } from '@/lib/helper'
import { useQuery, useQueryClient, } from 'react-query'
import { useSelector, useDispatch } from 'react-redux'
import { toggleChangeAction, updateAction } from "@/redux/reducer"

export default function TabelaMatriz() {

    const { isLoading, isError, data, error } = useQuery('matrizes', getMatrizes)

    if (isLoading) return <div className="">Carregando Matrizes...</div>
    if (isError) return <div>Algo deu errado!</div>



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
                    data.map((obj, i) => <Tr{...obj} key={i} />)
                }
            </tbody>
        </table>
    )
}


function Tr({ _id, numero, nome, proprietario, situacao }) {

    const visible = useSelector((state) => state.app.client.toggleForm)
    const dispatch = useDispatch()

    const onUpdate = () => {
        dispatch(toggleChangeAction())
        if (visible) {
            dispatch(updateAction(_id))
        }
    }

    return (
        <tr className="bg-gray-50 text-center">
            <td className="px-16 py-2">
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
                <button className="cursor" onClick={onUpdate}> <BiEdit size={25} color="rgb(34,197,94)" /></button>
                <button className="cursor"> <BiTrash size={25} color="rgb(244,63,94)" /> </button>
            </td>
        </tr>
    )
}
