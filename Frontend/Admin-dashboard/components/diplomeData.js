import { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import Modal from "./Modal";

export default function DiplomeData() {

  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [isvisibleAdd, setIsVisibleAdd] = useState(false)
  const [isvisibleInfo, setIsVisibleInfo] = useState(false)
  const [isvisibleUpdate, setIsVisibleUpdate] = useState(false)
  const [isVisibleConfirmationDelete,setIsVisibleConfirmationDelete] = useState(false)
  
  const [userData, setUserData] = useState({})
  const [diplomeId, setDiplomeId] = useState('')
  const [titre,setTitre] = useState ('')
  const [mention, setMention] = useState('')
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState ('')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:8090/api/v/user')
      setData(result.data)
      setTitre("BACCALAUREAT")
      setMention("ASSEZBIEN")
    }
    fetchData()
  }, [refresh])

  const onSubmitAdd = async (e) => {
    e.preventDefault();
    try {
      let datau = { cin: userData.cin, firstName: userData.firstName, lastName: userData.lastName, dateNaissance: userData.dateNaissance, titre: titre, mention: mention}
      console.log(datau)
      const resp = await axios.post('http://localhost:8090/api/v/diplome', datau)
      setIsVisibleAdd(false)
      setRefresh(!refresh)
    } catch (error) {
      console.log(error.response);
    }
  };

  const onSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.put('http://localhost:8090/api/v/diplome/'+ userData.diplome.id, {firstName: firstName, lastName:lastName})
      console.log(firstName)
      setIsVisibleUpdate(false)
      setRefresh(!refresh)
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSubbmitConfirmDelete = async () =>{

    try {
      await axios.delete('http://localhost:8090/api/v/diplome/' + diplomeId)
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
            <DispalyUserData refresh={refresh} setRefresh={setRefresh} user={user} setIsVisibleAdd={setIsVisibleAdd} setIsVisibleInfo={setIsVisibleInfo} setIsVisibleUpdate={setIsVisibleUpdate} setIsVisibleConfirmationDelete={setIsVisibleConfirmationDelete} setUserData={setUserData} setDiplomeId={setDiplomeId} />
          )}
        </tbody>
      </table>


      <Modal isvisible={isvisibleAdd} onClose={() => setIsVisibleAdd(false)}>
        <div className="p-6">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-5 border-b-2 pb-3">Ajouter Diplome</h3>
          <form className="space-y-6" action="#" onSubmit={onSubmitAdd}>
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
                disabled
                required
                value={userData.firstName}
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
                Date de naissaince:
              </label>
              <input
                type="date"
                name="dateNaissance"
                id="dateNaissance"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                placeholder="Flen"
                required
                value={userData.dateNaissance}
                disabled
              />

            </div>
            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Titre :
              </label>
              <select 
              name="titre"
              id="titre"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                required
                placeholder="Choisir le titre"
                value={titre}
                onChange={(e)=>setTitre(e.target.value)}>
                    <option value="BACCALAUREAT">BACCALAUREAT</option>
                    <option value="LICENCE">LICENCE</option>
                    <option value="MASTER">MASTER</option>
                    <option value="DOCTORAT">DOCTORAT</option>
                </select>

            </div>

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
              Mention :
              </label>
              <select 
              name="mention"
              id="mention"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                required
                placeholder="Choisir la mention"
                value={mention}
                onChange={(e)=>setMention(e.target.value)}>
                    <option value="ASSEZBIEN">ASSEZ BIEN</option>
                    <option value="BIEN">BIEN</option>
                    <option value="TRESBIEN">TRES BIEN</option>
                    <option value="EXELLENT">EXELLENT</option>
                </select>

            </div>

            <div className="inline-flex items-center">
              <button onClick={() => setIsVisibleAdd(false)} type="reset" className="w-auto flex justify-center text-base  bg-Red-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-Red-500 hover:text-Red-500 mr-5 ">Annuler</button>
              <button type="submit" className="flex justify-center text-base w-auto bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500 ">Ajouter</button>
            </div>

          </form>

        </div>

      </Modal>

      {/*Model Details*/}

      <Modal isvisible={isvisibleInfo} onClose={() => setIsVisibleInfo(false)}>
        <div className="p-6">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-5 border-b-2 pb-3">Détails Client</h3>
          <form className="space-y-6" action="#">
            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Nom:
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                value={userData.firstName}
                disabled
              />

            </div>

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Prenom:
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                value={userData.lastName}
                disabled

              />

            </div>

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                CIN:
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                value={userData.cin}
                disabled
              />
            </div>

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                E-mail
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                value={userData.email}
                disabled
              />

            </div>

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Date de naissaince:
              </label>
              <input
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                value={userData.dateNaissance}
                disabled
              />

            </div>

            <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Numéro Téléphone :
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                value={userData.phone}
                disabled
              />
            </div>

            {(userData.diplome == null) && (
                <>
              <div>
                <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                  Titre du diplome
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-Red-500 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                  value={"Le Diplome n'est pas encore fourni"}
                  disabled
                />
              </div>
              <div>
              <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Mention
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-Red-500 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 block w-full p-2.5"
                value={"Le Diplome n'est pas encore fourni"}
                disabled
              />
            </div>
            </>
            )}
            {(userData.diplome != null) && (
                <>
              <div>
                <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Titre du diplome
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-green-500 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                  value={userData.diplome?.titre}
                  disabled
                />
              </div>
              <div>
                <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                Mention
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-green-500 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                  value={userData.diplome?.mention}
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
          <h3 className="text-xl font-bold text-center text-gray-900 mb-5 border-b-2 pb-3">Modifier Diplome</h3>
          <form className="space-y-6" action="#" onSubmit={onSubmitUpdate}>
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
                onChange={(e)=>setLastName(e.target.value)}
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
                onChange={(e)=>setFirstName(e.target.value)}
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
              <button onClick={() => setIsVisibleUpdate(false)} type="reset" className="w-auto flex justify-center text-base  bg-Red-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-Red-500 hover:text-Red-500 mr-5 ">Annuler</button>
              <button type="submit" className="flex justify-center text-base w-auto bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-yellow-400 hover:text-yellow-400 ">Mettre a jour</button>
            </div>

          </form>

        </div>
      </Modal>



      {/*Modal supression confirm*/}
      <Modal isvisible={isVisibleConfirmationDelete} onClose={() => setIsVisibleConfirmationDelete(false)}>
        <div className="p-6">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-5 border-b-2 pb-7">Vous êtes sur le point de supprimer un Diplome </h3>
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


function DispalyUserData({ refresh, setRefresh, user, setIsVisibleAdd, setIsVisibleInfo, setIsVisibleUpdate,setIsVisibleConfirmationDelete, setUserData, setDiplomeId }) {

  const handleClickAjouter = async (user) => {
    setUserData(user)
    setIsVisibleAdd(true)
  }

  const handleClickDetail = async (user) => {
    setUserData(user)
    setIsVisibleInfo(true)
  }

  const handleClickUpdate = async (user) => {
    setUserData(user)
    setIsVisibleUpdate(true)
  }

  const handleClickSupprimer = async (id) => {
    setDiplomeId(id)
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
        {(user.diplome == null) && (
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-Red-500 text-white px-5 py-1 rounded'>Pas de diplome</span></button>
          </td>)}
        {(user.diplome != null) && (
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-green-500 text-white px-5 py-1 rounded'>Diplome Valide</span></button>
          </td>)}

        {(user.diplome == null) && (
          <td className='text-center px-6 py-4 whitespace-nowrap'>
            <button onClick={() => handleClickAjouter(user)} className='cursor bg-Indigo-500 text-white px-5 py-1 border rounded-md hover:bg-gray-50 hover:border-Indigo-500 hover:text-gray-800'>
              Ajouter
            </button>
            <span className="ml-3"><button onClick={() => handleClickDetail(user)} className='cursor bg-gray-500 text-white px-5 py-1 border rounded-md hover:bg-gray-50 hover:border-gray-500 hover:text-gray-800'>
              Détails
            </button></span>
          </td>)}

        {(user.diplome != null) && (
          <td className='text-center px-6 py-4 whitespace-nowrap'>
            <button onClick={() => handleClickSupprimer(user.diplome.id)} className='cursor bg-Red-500 text-white px-5 py-1 border rounded-md hover:bg-gray-50 hover:border-Red-500 hover:text-gray-800'>
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