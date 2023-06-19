
import FormularioUpdateMatriz from "./updateMatriz"
import FormularioAddMatriz from "./addMatriz"

export default function FormularioMatriz() {

    const flag = true
    return (

        <div className='container mx-auto pt-5'>
            {flag ? <FormularioAddMatriz /> : <FormularioUpdateMatriz />}
        </div>

    )
}