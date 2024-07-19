import { NAV_LINKS } from '@/app/Constants'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div
    className=' flexBetween max-container padding-container relative py-5'
    >
        <div className='flexCenter gap-20'>
        <h1 className='bold-20'>Simplex</h1>
        <ul className='hidden md:flex gap-7'>
            {NAV_LINKS.map((link)=>(
                <li key={link.key} className='regular-14'>
                    <a href="" className='text-gray-300 hover:text-white transition-all duration-200'>{link.label}</a>
                </li>
            ))}
        </ul>
        </div>
    <button className="flexCenter gap-1 bg-white px-6 py-2 text-black rounded-full">
        <AiOutlineUser/>
        <span className='regular-14'>login</span>
    </button>
    </div>
  )
}

export default Navbar