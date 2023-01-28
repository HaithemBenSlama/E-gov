import { Prestation } from "../Components/Prestation";
import { Layout } from "../Components/layout";
import { Pourqoui } from "../Components/Pourqoui";
import { Footer } from "../Components/Footer";
import { useEffect, useState } from "react";
import { Demande } from "../Components/Demande";
export default function Home() {

  const [isConnected, setIsConnected] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {

      if (localStorage.getItem("isConnected") == null) {
        setIsConnected(null)
      }
      else {
        setIsConnected(true)
      }
    }
  })


  return (
    <Layout isConnected={isConnected}>
      <div className="w-full flex justify-center mb-5 gap-10">
        <Pourqoui />
      </div>
      <div className="w-full flex justify-start mb-5 text-2xl font-bold">Liste de prestations: </div>
      <div className="grid grid-cols-4 w-full gap-4 pb-11">
        <Prestation></Prestation>
      </div>
      <div className="w-full flex justify-start mb-5 text-2xl font-bold">Demande de réctification:  </div>
      <div className="grid grid-cols-4 w-full gap-4 pb-11">
        <Demande/>
      </div>
      <Footer />
    </Layout>
  )
}
