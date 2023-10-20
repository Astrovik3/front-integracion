'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function NavLinks() {

  const [selectedPage, setSelectedPage] = useState('home');

  return (
    <div className="flex items-center md:p-0">
      <Link href="/home" className='flex items-center'>
        <Image src="https://flowbite.com/docs/images/logo.svg" width={32} height={32} className="h-8 mr-3" alt="Flowbite Logo" quality={100} />
      </Link>
      <ul className="font-medium flex flex-col p-0 pl-8 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
        <li>
          <Link
            href="/home"
            className={`${selectedPage == 'home' ? 'text-white' : 'text-slate-400'} block py-2 pl-3 pr-4 rounded md:bg-transparent hover:text-white md:p-0`}
            onClick={() => setSelectedPage('home')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/robots"
            className={`${selectedPage == 'robots' ? 'text-white' : 'text-slate-400'} block py-2 pl-3 pr-4 rounded md:bg-transparent hover:text-white md:p-0`}
            onClick={() => setSelectedPage('robots')}
          >
            Robots
          </Link>
        </li>
        <li>
          <Link
            href="/map"
            className={`${selectedPage == 'map' ? 'text-white' : 'text-slate-400'} block py-2 pl-3 pr-4 rounded md:bg-transparent hover:text-white md:p-0`}
            onClick={() => setSelectedPage('mapa')}
          >
            Mapa
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavLinks