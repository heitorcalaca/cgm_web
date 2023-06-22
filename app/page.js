"use client"
import { GiCow } from 'react-icons/gi';
import TabelaMatriz from '@/components/tabela_matiz';
import FormularioMatriz from '@/components/formulario_matriz';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChangeAction } from '@/redux/reducer';
import { useState } from 'react';

export default function Home() {

  const visible = useSelector((state) => state.app.client.toggleForm)
  const dispatch = useDispatch()

  const handler = () => {
    dispatch(toggleChangeAction())

  };

  return (
    <section>

      <main className='py-5'>
        <h1 className='text-xl md:text-5xl text-center font-bold py-10'>Controle de Gado</h1>

        <div className='container mx-auto flex justify-between py-5 border-b'>
          <div className='left flex gap-3'>

            <button onClick={handler} className='flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-slate-400'>
              Nova Matriz <span className='pl-2'> <GiCow size={23} /> </span>
            </button>
          </div>

        </div>
        {/* collapsible form */}
        {visible && <FormularioMatriz />}

        {/* table */}
        <div className='container mx-auto'>
          <TabelaMatriz />
        </div>
      </main>
    </section>

  );
}