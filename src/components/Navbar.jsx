import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link href="/" className='text-2xl'>
    Care.<span className='text-blue-800'>xyz</span>
    </Link>
  </div>
  <div className="">
    <ul className="flex items-center gap-4">
      <li><Navlink href="/">Home</Navlink></li>
      <li><Navlink href="/cares">Cares</Navlink></li>
      <li><Navlink href="/bookings">Bookings</Navlink></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;