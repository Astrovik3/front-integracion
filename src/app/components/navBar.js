import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
      <nav className="bg-gray-800 border-gray-200 dark:bg-gray-900">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center md:p-0">
            <Link href="/home" className='flex items-center'> 
              <Image src="https://flowbite.com/docs/images/logo.svg" width={32} height={32} className="h-8 mr-3" alt="Flowbite Logo" quality={100}/>
            </Link>
            <ul className="font-medium flex flex-col p-0 pl-8 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link href="/home" className='block py-2 pl-3 pr-4 text-white bg-white rounded md:bg-transparent md:text-white md:p-0'>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/robots" className="block py-2 pl-3 pr-4 text-slate-400 rounded md:border-0 md:hover:text-white md:p-0">
                  Robots
                </Link>
              </li>
              <li>
                <Link href="/map" className="block py-2 pl-3 pr-4 text-slate-400 rounded md:border-0 md:hover:text-white md:p-0">
                  Mapa
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-0 pr-8 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <Link href="#" className="block py-2 pr-4 text-white rounded md:border-0 md:p-0 dark:text-white">
                ADMIN
              </Link>
            </ul>
          </div>
        </div>
      </nav>
  )
}
