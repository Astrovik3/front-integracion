import './globals.css'
import { Roboto } from 'next/font/google'
import NavBar from './components/navBar'

const roboto = Roboto({ subsets: ['latin'], weight: '400'})


export default function RootLayout({ children }) {
  /*const [userLoaded, setUserLoaded] = useState(false);
  const [user, setUser] = useState("Cargando...");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUserLoaded(true);
    }, 3000);
    const intervalUserId = setInterval(() => {
      setUser("Bienvenido Manny!");
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(intervalUserId);
    };
  }, [setUserLoaded, setUser]);*/

  return (
    <html lang="en">
      <body className={roboto.className + ' h-screen max-h-screen flex flex-col'}>
        {children}
      </body>
    </html>
  )
}
