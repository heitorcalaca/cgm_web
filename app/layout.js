import './globals.css'
import { Inter } from 'next/font/google'
import connectMongo from '../database/conn'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Controle de Gado'
  ,
  description: 'Desenvolvido por Calaça Digital',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
