import { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import Modal from "./Modal";

export default function UserData() {

  const [data, setData] = useState([])
  const [isvisibleInfo, setIsVisibleInfo] = useState(false)
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:8090/api/v/user')
      setData(result.data)
    }
    fetchData()
  }, [])


  return (
    <Fragment>
      <table className="min-w-full max-h-2 overflow-y-scroll ">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-center font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
              CIN
            </th>
            <th className="text-center font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
              Role
            </th>
            <th className="text-center font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
              Locked
            </th>
            <th className="text-center font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
              Enabled
            </th>
            <th className="text-center font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
              Permis
            </th>
            <th className="text-center font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
              Diplome
            </th>
            <th className="text-center font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
              Contrat Mariage
            </th>
            <th className="text-center font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
              Declaration Naissance
            </th>
            <th className="text-center font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody className='bg-white'>
          {data.map((user) =>
            <DispalyUserData user={user} setIsVisibleInfo={setIsVisibleInfo} setUserData={setUserData} />
          )}
        </tbody>
      </table>

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

            <div className="inline-flex items-center">
              <button onClick={() => setIsVisibleInfo(false)} type="reset" className="w-auto flex justify-center text-base  bg-Red-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-Red-500 hover:text-Red-500 mr-5 ">Fermer</button>
            </div>

          </form>
        </div>
      </Modal>

    </Fragment>
  )
}


function DispalyUserData({ user, setIsVisibleInfo, setUserData }) {


  const handleClickDetail = async (user) => {
    setUserData(user)
    setIsVisibleInfo(true)
  }

    return (
      <tr>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
          <div className='text-sm text-gray-500'>{user.cin}</div>
        </td>
        {(user.userRole == "USER") && (
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-green-500 text-white px-5 py-1 rounded'>USER</span></button>
          </td>)}

        {(user.userRole == "ADMIN") && (
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-blue-500 text-white px-5 py-1 rounded'>ADMIN</span></button>
          </td>)}

          {(user.locked == false) && (
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-green-500 text-white px-5 py-1 rounded'>Déverrouiller</span></button>
          </td>)}
        {(user.locked == true) && (
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-Red-500 text-white px-5 py-1 rounded'>Verrouiller</span></button>
          </td>)}

          {(user.enabled == false) && (
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-Red-500 text-white px-5 py-1 rounded'>Invalide</span></button>
          </td>)}
        {(user.enabled == true) && (
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-green-500 text-white px-5 py-1 rounded'>Valide</span></button>
          </td>)}

          {(user.permis == null) && (
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-Red-500 text-white px-5 py-1 rounded'>Dépourvu</span></button>
          </td>)}
        {(user.permis != null) && (
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-green-500 text-white px-5 py-1 rounded'>Fourni</span></button>
          </td>)}

          {(user.diplome == null) && (
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-Red-500 text-white px-5 py-1 rounded'>Dépourvu</span></button>
          </td>)}
        {(user.diplome != null) && (
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-green-500 text-white px-5 py-1 rounded'>Fourni</span></button>
          </td>)}

          {(user.contratMariage == null) && (
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-Red-500 text-white px-5 py-1 rounded'>Dépourvu</span></button>
          </td>)}
        {(user.contratMariage != null) && (
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-green-500 text-white px-5 py-1 rounded'>Fourni</span></button>
          </td>)}

          {(user.declarationNaissance == null) && (
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-Red-500 text-white px-5 py-1 rounded'>Dépourvu</span></button>
          </td>)}
        {(user.declarationNaissance != null) && (
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-green-500 text-white px-5 py-1 rounded'>Fourni</span></button>
          </td>)}


          <td className='text-center px-6 py-4 whitespace-nowrap'>
            <span className="ml-3"><button onClick={() => handleClickDetail(user)} className='cursor bg-gray-500 text-white px-5 py-1 border rounded-md hover:bg-gray-50 hover:border-gray-500 hover:text-gray-800'>
              Détails
            </button></span>
          </td>

      </tr>
    )
}