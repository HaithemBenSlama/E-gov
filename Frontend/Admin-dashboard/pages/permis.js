import React from "react";
import Layout from "../components/Layout";
import PermisData from "../components/permisData";

const Permis = () => {
  return (<Layout>
    <div className='bg-text rounded-lg'>
      <div className='h-16 px-8 flex items-center text-center'>
        <p className='text-white font-bold flex-auto '>Gérer les Permis</p>
      </div>
    </div>
    <div className="container mx-auto my-8 max-h-full overflow-y-scroll" >
      <div className="flex shadow border-gray-500">
        <PermisData></PermisData>
      </div>
    </div>
  </Layout>
  );
};

export default Permis;
