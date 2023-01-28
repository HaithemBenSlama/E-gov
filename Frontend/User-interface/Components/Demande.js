import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineCar } from 'react-icons/ai';
import { FaFileInvoice, FaBaby } from 'react-icons/fa';
import { GiDiploma } from 'react-icons/gi';
import { RiUserSettingsFill } from 'react-icons/ri';
import Modal from './Model';


export const Demande = () => {

    const [isvisibleUpdatePermis,setIsVisibleUpdatePermis]=useState(false)
    const [isvisibleUpdateDeclarationNaissance,setIsVisibleUpdateDeclarationNaissance]=useState(false)
    const [isvisibleUpdateDiplome,setIsVisibleUpdateDiplome]=useState(false)
    const [isvisibleUpdateAccount,setIsVisibleUpdateAccount]=useState(false)

    const [numero,setNumero]=useState();
    const [nomN, setNomN] =useState();
    const [prenomN,setPrenomN]= useState();
    const [firstNameD,setFirstNameD]=useState();
    const [lastNameD,setLastNameD]=useState();
    const [email,setEmail]=useState();
    const [phone,setPhone]=useState();
    const [password,setPassword]=useState();

    const [userData,setUserData]=useState({});
    
    const onClickPermis = () => {
        if(localStorage.getItem("idUser")==null){
            alert("Vous devez vous connecter à votre compte pour accéder à la prestation.")
        }
        else{
            async function fetchData (){
                const result = await axios('http://localhost:8090/api/v/user/'+localStorage.getItem("idUser"))
                return(result.data);
              }
              fetchData().then(res=> {
                setUserData(res);
                if(userData.permis==null){
                    alert("L'administration n'est pas encore fourni votre Permis");
                }
                else
                    setIsVisibleUpdatePermis(true);
              })
        }
    }

    const onClickAccount = () => {
        if(localStorage.getItem("idUser")==null){
            alert("Vous devez vous connecter à votre compte pour accéder à la prestation.")
        }
        else{
            async function fetchData (){
                const result = await axios('http://localhost:8090/api/v/user/'+localStorage.getItem("idUser"))
                return(result.data);
              }
              fetchData().then(res=> {
                setUserData(res);
                setIsVisibleUpdateAccount(true);
              })
        }
        }

    const onClickNaissance = () => {
        if(localStorage.getItem("idUser")==null){
            alert("Vous devez vous connecter à votre compte pour accéder à la prestation.")
        }
        else{
        async function fetchData (){
            const result = await axios('http://localhost:8090/api/v/user/'+localStorage.getItem("idUser"))
            return(result.data);
          }
          fetchData().then(res=> {
            setUserData(res);
            if(res.declarationNaissance==null){
                alert("L'administration n'est pas encore fourni la déclaration de naissance");
            }
            else
                setIsVisibleUpdateDeclarationNaissance(true);
          })
        }
    }

    const onClickDiplome = () => {
        if(localStorage.getItem("idUser")==null){
            alert("Vous devez vous connecter à votre compte pour accéder à la prestation.")
        }
        else{
        async function fetchData (){
            const result = await axios('http://localhost:8090/api/v/user/'+localStorage.getItem("idUser"))
            return(result.data);
          }
          fetchData().then(res=> {
            setUserData(res);
            if(res.diplome==null){
                alert("L'administration n'est pas encore fourni votre Diplome");
            }
            else
                setIsVisibleUpdateDiplome(true);
          })}
    }

    const onSubmitMajPermis=async(e)=>{
        
        e.preventDefault();
        try {
        let datau = { userV: localStorage.getItem("idUser"), type: "PERMIS", numeroPermis:numero, etat:"ENCOURS" }
        console.log(datau)
        const resp = await axios.post('http://localhost:8090/api/v/validation/permis', datau)
        setIsVisibleUpdatePermis(false)
        alert("Demande de réctification Permis envoyée. Vous serez informé par mail de l'état de votre demande ")
        } catch (error) {
        console.log(error.data);
    }
    }

    const onSubmitMajDeclarationNaissance=async(e)=>{
        
        e.preventDefault();
        try {
        let datau = { userV: localStorage.getItem("idUser"), type: "DECLARATIONNAISSANCE", naissanceFirstName:prenomN , naissanceLastName: nomN, etat:"ENCOURS" }
        console.log(datau)
        const resp = await axios.post('http://localhost:8090/api/v/validation/declaration', datau)
        setIsVisibleUpdateDeclarationNaissance(false)
        alert("Demande de réctification de votre déclaration de naissance est envoyée. Vous serez informé par mail de l'état de votre demande ")
        } catch (error) {
        console.log(error.data);
    }
    }

    const onSubmitMajDiplome=async(e)=>{
        
        e.preventDefault();
        try {
        let datau = { userV: localStorage.getItem("idUser"), type: "DIPLOME", diplomeFirstName:firstNameD , diplomeLastName: lastNameD, etat:"ENCOURS" }
        console.log(datau)
        const resp = await axios.post('http://localhost:8090/api/v/validation/diplome', datau)
        setIsVisibleUpdateDiplome(false)
        alert("Demande de réctification de votre diplome est envoyée. Vous serez informé par mail de l'état de votre demande ")
        } catch (error) {
        console.log(error.data);
    }
    }

    const onSubmitMajAccount=async(e)=>{
        
        e.preventDefault();
        try {
        let datau = { userV: localStorage.getItem("idUser"), type: "ACCOUNT", userPhone:phone , userEmail:email ,userPassword:password,etat:"ENCOURS" }
        console.log(datau)
        const resp = await axios.post('http://localhost:8090/api/v/validation/user', datau)
        setIsVisibleUpdateAccount(false)
        alert("Demande de réctification de votre Compte est envoyé. Vous serez informé par mail de l'état de votre demande ")
        } catch (error) {
        console.log(error.data);
    }
    }

    return (
        <>
            <button onClick={onClickPermis} className='w-full h-52 bg-slate-100 hover:shadow-xl'>
                <div className='flex justify-center items-center w-full h-3/5 bg-slate-800 text-white text-5xl'>
                    <AiOutlineCar />
                </div>
                <div className='flex justify-center items-center w-full h-2/5'>
                    Permis de conduite
                </div>
            </button>

            <button onClick={onClickNaissance} className='w-full h-52 bg-slate-100 hover:shadow-xl'>
                <div className='flex justify-center items-center w-full h-3/5 bg-stone-700 text-white text-5xl'>
                    <FaBaby />
                </div>
                <div className='flex justify-center items-center w-full h-2/5'>
                    Déclaration de naissance
                </div>
            </button>

            <button onClick={onClickDiplome} className='w-full h-52 bg-slate-100 hover:shadow-xl'>
                <div className='flex justify-center items-center w-full h-3/5 bg-orange-700 text-white text-5xl'>
                    <GiDiploma />
                </div>
                <div className='flex justify-center items-center w-full h-2/5'>
                    Diplome
                </div>
            </button>

            <button onClick={onClickAccount} className='w-full h-52 bg-slate-100 hover:shadow-xl'>
                <div className='flex justify-center items-center w-full h-3/5 bg-blue-800 text-white text-5xl'>
                    <RiUserSettingsFill />
                </div>
                <div className='flex justify-center items-center w-full h-2/5'>
                    Modifier Compte
                </div>
            </button>
            {/*Modal update Permis*/}
      <Modal isvisible={isvisibleUpdatePermis} onClose={() => setIsVisibleUpdatePermis(false)}>
        <div className="p-6">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-5 border-b-2 pb-3">Demande de réctification Permis</h3>
          <form className="space-y-6" action="#" onSubmit={onSubmitMajPermis}>
            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Nom:
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                value={userData.lastName}
                placeholder="Flen"
                required
                disabled

              />

            </div>

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Prénom:
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                placeholder="Flen"
                required
                value={userData.firstName}
                disabled
              />

            </div>

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                CIN:
              </label>
              <input
                type="text"
                name="cin"
                id="cin"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                placeholder="Flen"
                required
                value={userData.cin}
                disabled
              />
            </div>

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Numéro Permis:
              </label>
              <input
                type="text"
                name="numero"
                id="numero"
                className="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                required
                onChange={(e)=>setNumero(e.target.value)}

              />

            </div>

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Date de naissaince:
              </label>
              <input
                type="date"
                name="dateNaissance"
                id="dateNaissance"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                required
                value={userData.dateNaissance}
                disabled
              />

            </div>
            <div className="inline-flex items-center">
              <button onClick={() => setIsVisibleUpdatePermis(false)} type="reset" className="w-auto flex justify-center text-base  bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-red-500 hover:text-red-500 mr-5 ">Annuler</button>
              <button type="submit" className="flex justify-center text-base w-auto bg-green-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-400 hover:text-green-400 ">Envoyer Demande</button>
            </div>

          </form>

        </div>
      </Modal>
      {/*Modal update declaration naissance*/}
      <Modal isvisible={isvisibleUpdateDeclarationNaissance} onClose={() => setIsVisibleUpdateDeclarationNaissance(false)}>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-5 border-b-2 pb-3">Modifier Declaration du naissance</h3>
                    <form className="space-y-6" action="#" onSubmit={onSubmitMajDeclarationNaissance}>
                    <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                    Nom du Père:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                                        value={userData.declarationNaissance?.lastNameH}
                                        disabled
                                    />

                                </div>

                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                    Prenom du Père:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                                        value={userData.declarationNaissance?.firstNameH}
                                        disabled

                                    />

                                </div>

                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                    CIN du Pére:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                                        value={userData.declarationNaissance?.cinH}
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                    Nom du mére:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                  focus:border-blue-500 block w-full p-2.5"
                                        value={userData.declarationNaissance?.lastNameF}
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                    Prenom du mére:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                    focus:border-blue-500 block w-full p-2.5"
                                        value={userData.declarationNaissance?.firstNameF}
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                    Nom de l'enfant:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                     focus:border-blue-500 block w-full p-2.5"
                                     placeholder="Nom"
                                        onChange={(e)=>setNomN(e.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                    Prénom de l'enfant:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                    focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Prénom"
                                        onChange={(e)=>setPrenomN(e.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                    Genre:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                         focus:border-blue-500 block w-full p-2.5"
                                        value={userData.declarationNaissance?.juniorGender}
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                    Date de Naissance:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                         focus:border-blue-500 block w-full p-2.5"
                                        value={userData.declarationNaissance?.dateNaissance}
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                    Lieu:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                         focus:border-blue-500 block w-full p-2.5"
                                        value={userData.declarationNaissance?.lieu}
                                        disabled
                                    />
                                </div>
                        <div className="inline-flex items-center">
                            <button onClick={() => setIsVisibleUpdateDeclarationNaissance(false)} type="reset" className="w-auto flex justify-center text-base  bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-red-500 hover:text-red-500 mr-5 ">Annuler</button>
                            <button type="submit" className="flex justify-center text-base w-auto bg-green-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-400 hover:text-green-400 ">Envoyer demande</button>
                        </div>

                    </form>

                </div>
            </Modal>

        {/*Modal update diplome*/}
      <Modal isvisible={isvisibleUpdateDiplome} onClose={() => setIsVisibleUpdateDiplome(false)}>
        <div className="p-6">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-5 border-b-2 pb-3">Demande de réctification Diplome</h3>
          <form className="space-y-6" action="#" onSubmit={onSubmitMajDiplome}>
            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Nom:
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                placeholder="Nom"
                required
                onChange={(e)=>setLastNameD(e.target.value)}
              />

            </div>

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Prénom:
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                placeholder="Prenom"
                required
                onChange={(e)=>setFirstNameD(e.target.value)}
              />

            </div>

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                CIN:
              </label>
              <input
                type="text"
                name="cin"
                id="cin"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                required
                value={userData.cin}
                disabled
              />
            </div>

            

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Date de naissaince:
              </label>
              <input
                type="date"
                name="dateNaissance"
                id="dateNaissance"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                required
                value={userData.dateNaissance}
                disabled
              />

            </div>

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Titre du diplome:
              </label>
              <input
                type="text"
                name="titre"
                id="titre"
                className="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                value={userData.diplome?.titre}
                required
                disabled

              />

            </div>
            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Mention:
              </label>
              <input
                type="text"
                name="mention"
                id="mention"
                className="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                value={userData.diplome?.mention}
                required
                disabled

              />

            </div>
            <div className="inline-flex items-center">
              <button onClick={() => setIsVisibleUpdateDiplome(false)} type="reset" className="w-auto flex justify-center text-base  bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-red-500 hover:text-red-500 mr-5 ">Annuler</button>
              <button type="submit" className="flex justify-center text-base w-auto bg-green-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-400 hover:text-green-400 ">Envoyer demande</button>
            </div>

          </form>

        </div>
      </Modal>

        {/*Modal update compte*/}
      <Modal isvisible={isvisibleUpdateAccount} onClose={() => setIsVisibleUpdateAccount(false)}>
        <div className="p-6">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-5 border-b-2 pb-3">Demande de réctification Compte</h3>
          <form className="space-y-6" action="#" onSubmit={onSubmitMajAccount}>
            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Nom:
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                disabled
                value={userData.lastName}
              />

            </div>

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Prénom:
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                disabled
                value={userData.firstName}
              />

            </div>

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                required
                placeholder='example@example.com'
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Numéro Télèphone:
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                required
                placeholder='+216 xx xxx xxx'
                onChange={(e)=>setPhone(e.target.value)}
                
              />

            </div>

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Nouveau mot de passe:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                placeholder='••••••••'
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
            </div>
            <div className="inline-flex items-center">
              <button onClick={() => setIsVisibleUpdateAccount(false)} type="reset" className="w-auto flex justify-center text-base  bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-red-500 hover:text-red-500 mr-5 ">Annuler</button>
              <button type="submit" className="flex justify-center text-base w-auto bg-green-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-400 hover:text-green-400 ">Envoyer demande</button>
            </div>

          </form>

        </div>
      </Modal>
        </>
    )
}
