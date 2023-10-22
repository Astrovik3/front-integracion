'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function NavLinks() {

  const [selectedPage, setSelectedPage] = useState('home');

    return (
        <div className="flex items-center">
            <Link href="/home" className='flex items-center' onClick={()=>setSelectedPage('home')}> 
                <Image src="https://flowbite.com/docs/images/logo.svg" width={46} height={46} className="h-10 mr-3" alt="Flowbite Logo" quality={100}/>
            </Link>
            <ul className="font-medium flex pl-6 rounded-lg flex-row">
                <li>
                    <Link 
                    href="/home" 
                    className={`${selectedPage == 'home' ? 'text-white' : 'text-slate-400'} block py-2 pl-3 pr-4 rounded md:bg-transparent hover:text-white`}
                    onClick={()=>setSelectedPage('home')}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                    href="/robots" 
                    className={`${selectedPage == 'robots' ? 'text-white' : 'text-slate-400'} block py-2 pl-3 pr-4 rounded md:bg-transparent hover:text-white`}
                    onClick={()=>setSelectedPage('robots')}
                    >
                        Robots
                    </Link>
                </li>
                <li>
                    <Link 
                    href="/map" 
                    className={`${selectedPage == 'mapa' ? 'text-white' : 'text-slate-400'} block py-2 pl-3 pr-4 rounded md:bg-transparent hover:text-white`}
                    onClick={()=>setSelectedPage('mapa')}
                    >
                        Mapa
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavLinks