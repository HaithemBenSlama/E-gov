import { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import Modal from "./Modal";

export default function DeclarationNaissanceData() {

    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [isvisibleInfo, setIsVisibleInfo] = useState(false)
    const [isvisibleUpdate, setIsVisibleUpdate] = useState(false)
    const [isVisibleConfirmationDelete, setIsVisibleConfirmationDelete] = useState(false)

    const [userData, setUserData] = useState({})
    const [declarationNaissanceId, setDeclarationNaissanceId] = useState('')
    const [date,setDate]= useState('')
    const [nom, setNom] = useState('');
    const [prenom,setPrenom]=useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8090/api/v/user')
            setData(result.data)
        }
        fetchData()
    }, [refresh])

    const onSubmitUpdate = async (e) => {
        e.preventDefault();
        try {
          const resp = await axios.put('http://localhost:8090/api/v/declarationnaissance/'+ userData.declarationNaissance.id+"/?lastName="+nom+"&firstName="+prenom)
          console.log(date)
          setIsVisibleUpdate(false)
          setRefresh(!refresh)
        } catch (error) {
          console.log(error.response);
        }
      };
    
      const handleSubbmitConfirmDelete = async () =>{
    
        try {
          await axios.delete('http://localhost:8090/api/v/declarationnaissance/' + declarationNaissanceId)
          setIsVisibleConfirmationDelete(false)
          setRefresh(!refresh)
        } catch (error) {
          console.error(error);
        }
      }


    return (
        <Fragment>
            <table className="min-w-full max-h-2 overflow-y-scroll ">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                            Cin Client
                        </th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                            Nom
                        </th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                            Prenom
                        </th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                            E-mail
                        </th>
                        <th className="text-center font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                            Status
                        </th>
                        <th className="text-center font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {data.map((user) =>
                        <DispalyUserData user={user} setIsVisibleInfo={setIsVisibleInfo} setIsVisibleUpdate={setIsVisibleUpdate} setIsVisibleConfirmationDelete={setIsVisibleConfirmationDelete} setUserData={setUserData} setDeclarationNaissanceId={setDeclarationNaissanceId} />
                    )}
                </tbody>
            </table>

            {/*Model Details*/}

            <Modal isvisible={isvisibleInfo} onClose={() => setIsVisibleInfo(false)}>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-5 border-b-2 pb-3">Détails Client</h3>
                    <form className="space-y-6" action="#">
                        {(userData.declarationNaissance == null) && (
                            <>
                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                        Nom du Père:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-Red-500 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                                        value={"La déclaration du naissance n'est pas encore fourni"}
                                        disabled
                                    />

                                </div>

                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                        Prenom du Père:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-Red-500 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                                        value={"La déclaration du naissance n'est pas encore fourni"}
                                        disabled

                                    />

                                </div>

                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                        CIN du Pére:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-Red-500 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                                        value={"La déclaration du naissance n'est pas encore fourni"}
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                        Nom du mére:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-Red-500 text-sm rounded-lg focus:ring-blue-500
                                  focus:border-blue-500 block w-full p-2.5"
                                        value={"La déclaration du naissance n'est pas encore fourni"}
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                        Prenom du mére:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-Red-500 text-sm rounded-lg focus:ring-blue-500
                                    focus:border-blue-500 block w-full p-2.5"
                                        value={"La déclaration du naissance n'est pas encore fourni"}
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                        Nom de l'enfant: 
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-Red-500 text-sm rounded-lg focus:ring-blue-500
                                     focus:border-blue-500 block w-full p-2.5"
                                        value={"La déclaration du naissance n'est pas encore fourni"}
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                        Prénom de l'enfant:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-Red-500 text-sm rounded-lg focus:ring-blue-500
                                    focus:border-blue-500 block w-full p-2.5"
                                        value={"La déclaration du naissance n'est pas encore fourni"}
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                        Genre:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-Red-500 text-sm rounded-lg focus:ring-blue-500
                                         focus:border-blue-500 block w-full p-2.5"
                                        value={"La déclaration du naissance n'est pas encore fourni"}
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                        Date de Naissance:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-Red-500 text-sm rounded-lg focus:ring-blue-500
                                         focus:border-blue-500 block w-full p-2.5"
                                        value={"La déclaration du naissance n'est pas encore fourni"}
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                        Lieu:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-Red-500 text-sm rounded-lg focus:ring-blue-500
                                         focus:border-blue-500 block w-full p-2.5"
                                        value={"La déclaration du naissance n'est pas encore fourni"}
                                        disabled
                                    />
                                </div>


                            </>)}
                        {(userData.declarationNaissance != null) && (
                            <>
                                <div>
                                    <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                                    Nom du Père:
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                                        value={userData.declarationNaissance.lastNameH}
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
                                        value={userData.declarationNaissance.firstNameH}
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
                                        value={userData.declarationNaissance.cinH}
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
                                        value={userData.declarationNaissance.lastNameF}
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
                                        value={userData.declarationNaissance.firstNameF}
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
                                        value={userData.declarationNaissance.lastNameJ}
                                        disabled
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
                                        value={userData.declarationNaissance.firstNameJ}
                                        disabled
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
                                        value={userData.declarationNaissance.juniorGender}
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
                                        value={userData.declarationNaissance.dateNaissance}
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
                                        value={userData.declarationNaissance.lieu}
                                        disabled
                                    />
                                </div>
                            </>
                        )}
                        <div className="inline-flex items-center">
                            <button onClick={() => setIsVisibleInfo(false)} type="reset" className="w-auto flex justify-center text-base  bg-Red-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-Red-500 hover:text-Red-500 mr-5 ">Fermer</button>
                        </div>

                    </form>
                </div>
            </Modal>

            {/*Modal update*/}
            <Modal isvisible={isvisibleUpdate} onClose={() => setIsVisibleUpdate(false)}>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-5 border-b-2 pb-3">Modifier Declaration du naissance</h3>
                    <form className="space-y-6" action="#" onSubmit={onSubmitUpdate}>
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
                                        onChange={(e)=>setNom(e.target.value)}
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
                                        onChange={(e)=>setPrenom(e.target.value)}
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
                            <button onClick={() => setIsVisibleUpdate(false)} type="reset" className="w-auto flex justify-center text-base  bg-Red-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-Red-500 hover:text-Red-500 mr-5 ">Annuler</button>
                            <button type="submit" className="flex justify-center text-base w-auto bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-yellow-400 hover:text-yellow-400 ">Mettre a jour</button>
                        </div>

                    </form>

                </div>
            </Modal>

            {/*Modal supression confirm*/}
            <Modal isvisible={isVisibleConfirmationDelete} onClose={() => setIsVisibleConfirmationDelete(false)}>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-5 border-b-2 pb-7">Vous êtes sur le point de supprimer une déclaration du naissance </h3>
                    <div className="items-center">
                        <span className="ml-3"><button onClick={handleSubbmitConfirmDelete} className='cursor bg-Red-500 text-white px-5 py-1 border rounded-md hover:bg-gray-50 hover:border-Red-500 hover:text-gray-800'>
                            Supprimer
                        </button></span>
                        <span className="ml-3"><button onClick={() => setIsVisibleConfirmationDelete(false)} className='cursor bg-gray-500 text-white px-5 py-1 border rounded-md hover:bg-gray-50 hover:border-gray-500 hover:text-gray-800'>
                            Annuler
                        </button></span>
                    </div>
                </div>
            </Modal>
        </Fragment>
    )
}


function DispalyUserData({ user, setIsVisibleInfo, setIsVisibleUpdate, setIsVisibleConfirmationDelete, setUserData, setDeclarationNaissanceId }) {


    const handleClickDetail = async (user) => {
        setUserData(user)
        setIsVisibleInfo(true)
    }

    const handleClickUpdate = async (user) => {
        setUserData(user)
        setIsVisibleUpdate(true)
    }

    const handleClickSupprimer = async (id) => {
        setDeclarationNaissanceId(id)
        setIsVisibleConfirmationDelete(true)

    }

    if (user.enabled == true && user.locked == false) {
        return (
            <tr>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{user.cin}</div>
                </td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{user.firstName}</div>
                </td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{user.lastName}</div>
                </td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{user.email}</div>
                </td>
                {(user.declarationNaissance == null) && (
                    <td className='text-center px-6 py-4'>
                        <button className='cursor-default'><span className='bg-Red-500 text-white px-5 py-1 rounded'>Pas du Déclaration</span></button>
                    </td>)}
                {(user.declarationNaissance != null) && (
                    <td className='text-center px-6 py-4'>
                        <button className='cursor-default'><span className='bg-green-500 text-white px-5 py-1 rounded'>Déclaration Valide</span></button>
                    </td>)}

                {(user.declarationNaissance == null) && (
                    <td className='text-center px-6 py-4 whitespace-nowrap'>
                        <span className="ml-3"><button onClick={() => handleClickDetail(user)} className='cursor bg-gray-500 text-white px-5 py-1 border rounded-md hover:bg-gray-50 hover:border-gray-500 hover:text-gray-800'>
                            Détails
                        </button></span>
                    </td>)}

                {(user.declarationNaissance != null) && (
                    <td className='text-center px-6 py-4 whitespace-nowrap'>
                        <button onClick={() => handleClickSupprimer(user.declarationNaissance.id)} className='cursor bg-Red-500 text-white px-5 py-1 border rounded-md hover:bg-gray-50 hover:border-Red-500 hover:text-gray-800'>
                            Supprimer
                        </button>
                        <span className="ml-3"><button onClick={() => handleClickUpdate(user)} className='cursor bg-yellow-400 text-white px-5 py-1 border rounded-md hover:bg-gray-50 hover:border-yellow-400 hover:text-gray-800'>
                            Editer
                        </button></span>
                        <span className="ml-3"><button onClick={() => handleClickDetail(user)} className='cursor bg-gray-500 text-white px-5 py-1 border rounded-md hover:bg-gray-50 hover:border-gray-500 hover:text-gray-800'>
                            Détails
                        </button></span>
                    </td>)}


            </tr>
        )
    }
}