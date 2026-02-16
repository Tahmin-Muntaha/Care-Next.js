"use client"


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href,children}) => {
    const path=usePathname()
    return (
        <Link href={href} className={`${path==href && "bg-black text-white px-4 py-2 rounded-2xl"}`}>{children}</Link>
    );
};

export default Navlink;