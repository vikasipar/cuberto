import React from 'react';
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-2xl px-12 py-4'>
        <span className='font-semibold'>cuberto</span>
        <HiOutlineMenuAlt4 className='hover:cursor-pointer text-3xl'/>
    </div>
  )
}

export default Navbar;