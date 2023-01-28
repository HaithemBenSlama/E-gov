import { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import Modal from "./Modal";

export default function DemandDataDecNaissance() {

  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [isVisibleConfirmationAccept, setIsVisibleConfirmationAccept] = useState();
  const [isVisibleConfirmationRefus, setIsVisibleConfirmationRefus] = useState();
  const [validation, setValidation] = useState();


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:8090/api/v/validation/declaration')
      setData(result.data)
    }
    fetchData()
  }, [refresh])

  const handleSubbmitConfirmAccept = async () => {

    try {
      await axios.put('http://localhost:8090/api/v/validation/declaration/' + validation.id + "/VALIDEE")
      setIsVisibleConfirmationAccept(false)
      setRefresh(!refresh)
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubbmitConfirmRefus = async () => {

    try {
      await axios.put('http://localhost:8090/api/v/validation/declaration/' + validation.id + "/REFUSEE")
      setIsVisibleConfirmationRefus(false)
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
              Validation Id
            </th>
            <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
              User ID
            </th>
            <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
              Type
            </th>
            <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
              Etat
            </th>
            <th className="text-center font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
              Nouveau Nom:
            </th>
            <th className="text-center font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
              Nouveau Prénom:
            </th>
            <th className="text-center font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody className='bg-white'>
          {data.map((valid) =>
            <DispalyUserData valid={valid} setValidation={setValidation} setIsVisibleConfirmationRefus={setIsVisibleConfirmationRefus} setIsVisibleConfirmationAccept={setIsVisibleConfirmationAccept} />
          )}
        </tbody>
      </table>


      {/*Model confirmation accecpt*/}
      <Modal isvisible={isVisibleConfirmationAccept} onClose={() => setIsVisibleConfirmationAccept(false)}>
        <div className="p-6">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-5 border-b-2 pb-7">Vous êtes sur le point d'accepter une demande de réctification Diplome  </h3>
          <div className="items-center">
            <span className="ml-3"><button onClick={handleSubbmitConfirmAccept} className='cursor bg-green-500 text-white px-5 py-1 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
              Accepter
            </button></span>
            <span className="ml-3"><button onClick={() => setIsVisibleConfirmationAccept(false)} className='cursor bg-gray-500 text-white px-5 py-1 border rounded-md hover:bg-gray-50 hover:border-gray-500 hover:text-gray-800'>
              Annuler
            </button></span>
          </div>
        </div>
      </Modal>

      {/*Model confirmation refus*/}
      <Modal isvisible={isVisibleConfirmationRefus} onClose={() => setIsVisibleConfirmationRefus(false)}>
        <div className="p-6">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-5 border-b-2 pb-7">Vous êtes sur le point de refuser une demande de réctification Diplome  </h3>
          <div className="items-center">
            <span className="ml-3"><button onClick={handleSubbmitConfirmRefus} className='cursor bg-Red-500 text-white px-5 py-1 border rounded-md hover:bg-gray-50 hover:border-Red-500 hover:text-Red-500'>
              Refuser
            </button></span>
            <span className="ml-3"><button onClick={() => setIsVisibleConfirmationRefus(false)} className='cursor bg-gray-500 text-white px-5 py-1 border rounded-md hover:bg-gray-50 hover:border-gray-500 hover:text-gray-800'>
              Annuler
            </button></span>
          </div>
        </div>
      </Modal>

    </Fragment>
  )
}


function DispalyUserData({ valid, setValidation, setIsVisibleConfirmationRefus, setIsVisibleConfirmationAccept }) {

  const handleClickAccepter = async (valid) => {
    setValidation(valid)
    setIsVisibleConfirmationAccept(true);
  }

  const handleClickRefuser = async (valid) => {
    setValidation(valid)
    setIsVisibleConfirmationRefus(true);
  }

  return (
    <tr>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{valid.id}</div>
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{valid.userV}</div>
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <button className=' px-4 py-1 bg-Red-400 text-white rounded-lg font-semibold text-sm '>Déclaration Naissance</button>
      </td>
      {(valid.etat == "REFUSEE") && (
        <>
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-Red-500 text-white px-5 py-1 rounded'>REFUSEE</span></button>
          </td>
          <td className='text-center px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{valid.naissanceLastName}</div>
          </td>
          <td className='text-center px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{valid.naissanceFirstName}</div>
          </td>
        </>
      )}

      {(valid.etat == "VALIDEE") && (
        <><td className='text-center px-6 py-4'>
          <button className='cursor-default'><span className='bg-green-500 text-white px-5 py-1 rounded'>VALIDEE</span></button>
        </td>
          <td className='text-center px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{valid.naissanceLastName}</div>
          </td>
          <td className='text-center px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{valid.naissanceFirstName}</div>
          </td></>)}

      {(valid.etat == "ENCOURS") && (
        <>
          <td className='text-center px-6 py-4'>
            <button className='cursor-default'><span className='bg-yellow-400 text-white px-5 py-1 rounded'>ENCOURS</span></button>
          </td>
          <td className='text-center px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{valid.naissanceLastName}</div>
          </td>
          <td className='text-center px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{valid.naissanceFirstName}</div>
          </td>
          <td className='text-center px-6 py-4 whitespace-nowrap'>
            <button onClick={() => handleClickAccepter(valid)} className='cursor bg-green-500 text-white px-5 py-1 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-gray-800'>
              Accepter
            </button>
            <span className="ml-3"><button onClick={() => handleClickRefuser(valid)} className='cursor bg-Red-500 text-white px-5 py-1 border rounded-md hover:bg-gray-50 hover:border-Red-500 hover:text-gray-800'>
              Refuser
            </button></span>
          </td>
        </>)}

    </tr>
  )

}