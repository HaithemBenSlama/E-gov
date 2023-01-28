import React from 'react'

export default function Modal({ isvisible, onClose, children }) {
    if (!isvisible) return null
    return (
        <div className="fixed inset-0 bg-[#000000] bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[600px] flex flex-col max-h-screen overflow-y-scroll">
                <button onClick={()=>onClose()} className="text-white text-xl place-self-end">
                    X</button>
                <div className="bg-white p-2 rounded">
                {children}
                </div>
            </div>
        </div>

    )
}