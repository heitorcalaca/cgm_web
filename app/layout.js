"use client"
import { QueryClient, QueryClientProvider } from 'react-query';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Controle de Gado',
  description: 'Desenvolvido por Calaça Digital',
};

export default function RootLayout({ children }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
