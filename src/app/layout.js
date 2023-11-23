'use client'

import { useEffect, useState } from 'react'
import './globals.css'
import { Roboto } from 'next/font/google'
import NavBar from './components/navBar'
import { useRouter } from 'next/navigation'

const roboto = Roboto({ subsets: ['latin'], weight: '400'})


export default function RootLayout({ children }) {
  const [userLoaded, setUserLoaded] = useState(false);
  const [user, setUser] = useState("Cargando...");
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUserLoaded(true);
    }, 3000);
    const intervalUserId = setInterval(() => {
      setUser("Bienvenido Manny!");
    }, 1000);
    const redirectTimeoutId = setTimeout(() => {
      router.push('/home');
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearInterval(intervalUserId);
      clearTimeout(redirectTimeoutId);
    };
  }, [setUserLoaded, setUser, router]);

  return (
    <html lang="en">
      <body className={roboto.className + ' h-screen max-h-screen flex flex-col'}>
        {!userLoaded ?
          (<p className='text-center pt-28'>{user}</p>) :
          (<>
            <NavBar/>
            {children}
          </>)
        }
      </body>
    </html>
  )
}
