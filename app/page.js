"use client"
import { GiCow } from 'react-icons/gi';
import TabelaMatriz from '@/components/tabela_matiz';
import FormularioMatriz from '@/components/formulario_matriz';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from '@/redux/store';

const queryClient = new QueryClient();

export const metadata = {
  title: 'Controle de Gado',
  description: 'Desenvolvido por Calaça Digital',
};

export default function Home({ Component, pageProps }) {
  const [visible, setVisible] = useState(false);

  const handler = () => {
    setVisible(!visible);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <section>
          <main className='py-5'>
            <h1 className='text-xl md:text-5xl text-center font-bold py-10'>Controle de Gado</h1>

            <div className='container mx-auto flex justify-between py-5 border-b'>
              <div className='left flex gap-3'>
                <button onClick={handler} className='flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-slate-400'>
                  Nova Matriz <span className='pl-2'> <GiCow size={23} /> </span>
                </button>
              </div>

              {/* collapsible form */}
              {visible && <FormularioMatriz />}
            </div>

            {/* table */}
            <div className='container mx-auto'>
              <TabelaMatriz />
            </div>
          </main>
        </section>
      </Provider>
    </QueryClientProvider>
  );
}
