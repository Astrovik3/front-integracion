import './globals.css'
import { Roboto } from 'next/font/google'
import NavBar from './components/navBar'

const roboto = Roboto({ subsets: ['latin'], weight: '400'})


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={roboto.className + ' h-screen max-h-screen flex flex-col'}>
        {children}
      </body>
    </html>
  )
}
