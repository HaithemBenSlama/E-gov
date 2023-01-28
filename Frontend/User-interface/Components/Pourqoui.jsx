import { useRouter } from 'next/router'
import React from 'react'
import Tunisia from './Icon/Tunisia'

export const Pourqoui = () => {
    const router = useRouter()
    const onClickSignup = ()=>{
        router.push("/signup")

    }
    return (
        <>
        <div className='mt-4 h-90% w-1/2'> <div className="h-3/5 bg-primary-flag flex justify-center">
              <Tunisia className="w-full items-center" />
            </div>
            <div className="w-full h-2/5 bg-gray-200 p-5">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-500 md:text-2xl">Bienvenue sur le guichet virtuel</h1>
              <p className="text-lg leading-tight tracking-tight text-black mt-5 ">Cette plateforme destinée à la population tunisienne, a pour objectif d'imprimer des prestations a distance.</p>
            </div></div>
        <div className='w-1/2 h-96 bg-gray-100 px-5 py-7 relative '>
            <h1 className='font-bold text-2xl mb-2'>
                Pourquoi créer un compte ?
            </h1>
            <p>
                Vous enregistrer sur le guichet virtuel vous permet de:
            </p>
            <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside m-3">
                <li >
                    Vous informer, suivre et réaliser vos démarches dans un espace unique, confidentiel et sécurisé
                </li>
                <li>
                    Interagir directement avec l'administration
                </li>
                <li>
                    Faciliter la réalisation et le suivi de vos démarches
                </li>
                <li>
                    Conserver des documents et pièces justificatives liés aux démarches
                </li>
            </ul>
            <p>
                Une adresse e-mail valide ainsi qu'un numéro de téléphone mobile sont nécessaires pour la création d'un compte.
            </p>
            <button onClick={onClickSignup} className=' absolute bottom-3 left-1/3 text-white bg-black px-3 py-2 hover:bg-gray-600 rounded'>Créer un compte</button>
        </div>
        
        </>
    )
}
