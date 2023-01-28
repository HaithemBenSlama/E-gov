import React from 'react'
import EgovIcon from './Icon/EgovIcon'

export const Footer = () => {
    return (
        <footer className="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6  bg-gray-800">
            <a href="#" className="flex items-center">
                <span className='mx-3'><EgovIcon /></span>
                <span className="self-center text-2xl font-semibold whitespace-nowrap  text-white">E-Gov</span>
            </a>
            <ul className="flex flex-wrap items-center mt-3 text-sm  text-gray-400 sm:mt-0">
                <li>
                    <span className="text-sm  sm:text-center  text-gray-400">© 2023 <a href="#" className="hover:underline">E-gov</a>. All Rights Reserved.</span>
                </li>
            </ul>
        </footer>



    )
}
