import axios from 'axios';
import React from 'react'
import { AiOutlineCar } from 'react-icons/ai';
import { FaFileInvoice, FaBaby } from 'react-icons/fa';
import { GiDiploma } from 'react-icons/gi';


export const Prestation = () => {

    const onClickPermis = () => {
        if(localStorage.getItem("idUser")==null){
            alert("Vous devez vous connecter à votre compte pour accéder à la prestation.")
        }
        else{
            axios.get("http://localhost:8090/api/v/createpdf/permis/"+localStorage.getItem("idUser")).then((res) => {
            console.log(res);
            alert("Le document est téléchargé dans votre bureau")
            }).catch(err=>alert("L'administration n'a pas encore fourni votre Permis."));
        }
    }

    const onClickMariage = () => {
        if(localStorage.getItem("idUser")==null){
            alert("Vous devez vous connecter à votre compte pour accéder à la prestation.")
        }
        else{
            axios.get("http://localhost:8090/api/v/createpdf/mariage/"+localStorage.getItem("idUser")).then((res) => {
            console.log(res);
            alert("Le document est téléchargé dans votre bureau")
            }).catch(err=>alert("L'administration n'a pas encore fourni votre Contrat du Mariage."));
        }
    }

    const onClickNaissance = () => {
        if(localStorage.getItem("idUser")==null){
            alert("Vous devez vous connecter à votre compte pour accéder à la prestation.")
        }
        else{
            axios.get("http://localhost:8090/api/v/createpdf/naissance/"+localStorage.getItem("idUser")).then((res) => {
            console.log(res);
            alert("Le document est téléchargé dans votre bureau")
            }).catch(err=>alert("L'administration n'a pas encore fourni la déclaration du naissance"));
        }
    }

    const onClickDiplome = () => {
        if(localStorage.getItem("idUser")==null){
            alert("Vous devez vous connecter à votre compte pour accéder à la prestation.")
        }
        else{
            axios.get("http://localhost:8090/api/v/createpdf/diplome/"+localStorage.getItem("idUser")).then((res) => {
            console.log(res);
            alert("Le document est téléchargé dans votre bureau")
            }).catch(err=>alert("L'administration n'a pas encore fourni Votre diplome"));
        }
    }

    return (
        <>
            <button onClick={onClickPermis} className='w-full h-52 bg-slate-100 hover:shadow-xl'>
                <div className='flex justify-center items-center w-full h-3/5 bg-black text-white text-5xl'>
                    <AiOutlineCar />
                </div>
                <div className='flex justify-center items-center w-full h-2/5'>
                    Permis de conduite
                </div>
            </button>

            <button onClick={onClickMariage} className='w-full h-52 bg-slate-100 hover:shadow-xl'>
                <div className='flex justify-center items-center w-full h-3/5 bg-blue-700 text-white text-5xl'>
                    <FaFileInvoice />
                </div>
                <div className='flex justify-center items-center w-full h-2/5'>
                    Contrat du Mariage
                </div>
            </button>

            <button onClick={onClickNaissance} className='w-full h-52 bg-slate-100 hover:shadow-xl'>
                <div className='flex justify-center items-center w-full h-3/5 bg-green-800 text-white text-5xl'>
                    <FaBaby />
                </div>
                <div className='flex justify-center items-center w-full h-2/5'>
                    Déclaration de naissance
                </div>
            </button>

            <button onClick={onClickDiplome} className='w-full h-52 bg-slate-100 hover:shadow-xl'>
                <div className='flex justify-center items-center w-full h-3/5 bg-rose-800 text-white text-5xl'>
                    <GiDiploma />
                </div>
                <div className='flex justify-center items-center w-full h-2/5'>
                    Diplome
                </div>
            </button>

        </>
    )
}
