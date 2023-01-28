import FormAddDecNaissance from "../components/Forms/FormAddDecNaissance";
import Layout from "../components/Layout";
import React, {  useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import DeclarationNaissanceData from "../components/declarationNaissanceData";


const DeclarationNaissaince = () => {
  const [visible, setVisible] = useState(false)
  return (<Layout>
    <div className='bg-text rounded-lg'>
      <div className='h-16 px-8 flex items-center text-center'>
        <p className='text-white font-bold flex-auto '>Gérer les Déclarations des naissances</p>
      </div>
    </div>
    <div className='container mx-auto flex justify-between py-5'>
        <div className='left flex gap-3'>
          <button onClick={() => setVisible(!visible)} className='flex bg-Indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-Indigo-500 hover:text-gray-900'>
          Déclarer nouveau naissance <span className='px-1'><AiFillPlusCircle size={23}></AiFillPlusCircle></span>
          </button>
        </div>
      </div>
      <div className='container mx-auto py-5'>
        {visible ? <FormAddDecNaissance></FormAddDecNaissance> : <></>}
      </div>
      <div className="container mx-auto mb-8 max-h-full overflow-y-scroll" >
        <div className="flex shadow border-gray-500">
            <DeclarationNaissanceData></DeclarationNaissanceData>
        </div>
      </div>
  </Layout>
  );
};

export default DeclarationNaissaince;
