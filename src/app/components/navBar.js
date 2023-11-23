import React from 'react';
import Link from 'next/link';
import NavLinks from './navLinks';

export default function NavBar() {
  return (
      <nav className="bg-[#283550] border-gray-200">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLinks/>
          <div id="navbar-default">
            <ul className="font-medium flex pl-8 rounded-lg flex-row pr-4">
              <Link href="#" className="block text-white rounded dark:text-white">
                MANNY
              </Link>
            </ul>
          </div>
        </div>
      </nav>
  )
}
