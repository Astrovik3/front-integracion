import React from 'react';
import Link from 'next/link';
import NavLinks from './navLinks';

export default function NavBar() {
  return (
      <nav className="bg-gray-800 border-gray-200 dark:bg-gray-900">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLinks/>
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
