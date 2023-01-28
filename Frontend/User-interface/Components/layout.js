import React from 'react'
import { useRouter } from 'next/router';
import { FaUserAlt } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

import EgovIcon from './Icon/EgovIcon'

export const Layout = (props) => {
    const router = useRouter();
    const onClickLogin = () => {
        router.push("/signin")
    }

    const onClickLogout = () => {
        localStorage.clear()
        router.push("")
    }
    return (
        <div className='w-screen h-screen '>
            <div className='w-full h-10% container max-w-7xl mx-auto mb-4'>
                <div className='w-full h-3/5 p-2'>
                    <a href="#" className="flex items-center">
                        <span className='mx-3'><EgovIcon /></span>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap  text-black">E-Gov</span>
                    </a>
                </div>
                <div className='w-full flex px-3 justify-between h-2/5 bg-black'>
                    <div className='w-40' >

                    </div>
                    {(props.isConnected == null) && (
                        <div className='flex gap-4 text-white py-1'>
                            <button onClick={onClickLogin} className='flex px-4 py-2 border rounded-md bg-gray-100 text-black items-center hover:bg-gray-300 '><span className='px-1'><FaUserAlt /></span>Se connecter</button>
                        </div>)}
                    {(props.isConnected == true) && (
                        <div className='flex gap-4 text-white py-1'>
                            <button onClick={onClickLogout} className='flex px-4 py-2 border rounded-md bg-gray-100 text-black items-center hover:bg-gray-300 '><span className='px-1'><BiLogOut /></span>Se déconnecter</button>
                        </div>)}
                </div>
            </div>
            <div className='w-full h-90% container max-w-7xl mx-auto'>
                {props.children}
            </div>
        </div>
    )
}
