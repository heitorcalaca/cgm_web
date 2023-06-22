
import FormularioUpdateMatriz from "./updateMatriz"
import FormularioAddMatriz from "./addMatriz"
import { useSelector } from 'react-redux'
import { useReducer } from "react"

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}


export default function FormularioMatriz() {

    const [formData, setFormData] = useReducer((formReducer), {})
    const formId = useSelector((state) => state.app.client.formId)
    return (

        <div className='container mx-auto pt-5'>
            {formId ? FormularioUpdateMatriz({ formId, formData, setFormData }) : FormularioAddMatriz({ formData, setFormData })}
        </div>

    )
}