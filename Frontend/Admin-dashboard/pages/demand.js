import React, { useState } from 'react'
import DemandDataDecNaissance from '../components/demandDataDecNaissance';
import DemandDataDiplome from '../components/demandDataDiplome';
import DemandDataPermis from '../components/demandDataPermis';
import DemandDataUser from '../components/demandDataUser';
import Layout from '../components/Layout'

const Demand = () => {
    const [permisVisible,setPermisVisible]= useState(true);
    const [diplomeVisible,setDiplomeVisible]= useState(false);
    const [userVisible,setUserVisible]= useState(false);
    const [decNaissanceVisible,setDecNaissanceVisible]= useState(false);


    const handleClickPermis = async (valid) => {
        setUserVisible(false)
        setDiplomeVisible(false)
        setDecNaissanceVisible(false)
        setPermisVisible(true)
      }
      const handleClickDiplome = async (valid) => {
        setUserVisible(false)
        setPermisVisible(false)
        setDecNaissanceVisible(false)
        setDiplomeVisible(true)
      }
      const handleClickUser = async (valid) => {
        setPermisVisible(false)
        setDiplomeVisible(false)
        setDecNaissanceVisible(false)
        setUserVisible(true)
      }
      const handleClickDecNaissance = async (valid) => {
        setPermisVisible(false)
        setDiplomeVisible(false)
        setUserVisible(false)
        setDecNaissanceVisible(true)
      }
    return (
        <Layout>
            <div className='bg-text rounded-lg'>
                <div className='h-16 px-8 flex items-center text-center'>
                    <p className='text-white font-bold flex-auto '>Gérer les demandes de réctification</p>
                </div>
            </div>
            <div class="flex p-4 text-sm text-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 mt-5"  >
                <div>
                    <span class="font-bold pr-7 ">Filtrer Par:</span> 
                    <span className='px-3'><button onClick={handleClickPermis}className=' px-4 py-1 bg-blue-500 text-white rounded-lg font-semibold text-sm '>Permis</button></span>
                    <span className='px-3'><button onClick={handleClickDiplome} className=' px-4 py-1 bg-green-500 text-white rounded-lg font-semibold text-sm'>Diplome</button></span>
                    <span className='px-3'><button onClick={handleClickDecNaissance} className=' px-4 py-1 bg-Red-400 text-white rounded-lg font-semibold text-sm'>Déclaration Naissance</button></span>
                    <span className='px-3'><button onClick={handleClickUser} className=' px-4 py-1 bg-sky-500 text-white rounded-lg font-semibold text-sm'>Compte Utilisateurs</button></span>
                    
                </div>
            </div>
            {(permisVisible==true) &&(
            <div className="container mx-auto my-8 max-h-full overflow-y-scroll" >
                <div className="flex shadow border-gray-500">
                    <DemandDataPermis />
                </div>
            </div>)}
            {(diplomeVisible==true) &&(
            <div className="container mx-auto my-8 max-h-full overflow-y-scroll" >
                <div className="flex shadow border-gray-500">
                    <DemandDataDiplome />
                </div>
            </div>)}
            {(decNaissanceVisible==true) &&(
            <div className="container mx-auto my-8 max-h-full overflow-y-scroll" >
                <div className="flex shadow border-gray-500">
                    <DemandDataDecNaissance />
                </div>
            </div>)}
            {(userVisible==true) &&(
            <div className="container mx-auto my-8 max-h-full overflow-y-scroll" >
                <div className="flex shadow border-gray-500">
                    <DemandDataUser />
                </div>
            </div>)}
        </Layout>
    )
}

export default Demand