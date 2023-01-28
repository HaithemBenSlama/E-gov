import React, { useEffect, useState } from "react";
import axios from "axios";


export default function FormAddContratMariage() {

    const [data, setData] = useState([]);
    const [valid, setValid] = useState("notSend");
    const [cinH, setCinH] = useState('');
    const [cinF, setCinF] = useState('');
    const [lieu, setLieu] = useState('');
    const [date, setDate] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8090/api/v/user')
            setData(result.data)
        }
        fetchData()
    }, [])
    const onSubmitAdd = async (e) => {
        e.preventDefault();
        const userH = data.filter(user => user.cin == cinH)
        const userF = data.filter(user => user.cin == cinF)
        if (userH.length == 0) {
            alert("Utilisateur avec CIN Homme n'existe pas")
            return
        }
        else if(userH[0].contratMariage!= null){
            alert("l'Utilisateur avec CIN Homme est deja marié")
            return
        }
        if (userF.length == 0) {
            alert("Utilisateur avec CIN Femme n'existe pas")
            return
        }
        else if(userF[0].contratMariage!= null){
            alert("l'Utilisateur avec CIN Femme est deja marié")
            return
        }
        try {
            let datau = { cinH: cinH, cinF: cinF, firstNameH: userH[0].firstName, lastNameH: userH[0].lastName, firstNameF: userF[0].firstName, lastNameF: userF[0].lastName, dateMariage: date, lieu: lieu }
            console.log(datau)
            const resp = await axios.post('http://localhost:8090/api/v/contratmariage', datau)
            setValid(resp.status)
            
        } catch (error) {
            console.log(error.response);
        }
    };


    return (
        <div>
            {valid == "notSend" && (
                <form className="grid lg:grid-cols-2 w-4/6 gap-4 " onSubmit={onSubmitAdd} >
                    <div>
                        <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                            CIN Homme:
                        </label>
                        <input type="text" id="lastName" name="lastName" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="CIN Homme" required
                            onChange={(e) => setCinH(e.target.value)}></input>
                    </div>
                    <div>
                        <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                            CIN Femme:
                        </label>
                        <input type="text" id="firstName" name="firstName" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="CIN Femme" required
                            onChange={(e) => setCinF(e.target.value)}></input>
                    </div>

                    <div>
                        <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                            Lieu du mariage:
                        </label>
                        <input type="text" id="cin" name="cin" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Lieu" required
                            onChange={(e) => setLieu(e.target.value)}></input>
                    </div>

                    <div>
                        <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                            Date du mariage:
                        </label>
                        <input type="date" id="dateNaissance" name="dateNaissance" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Date de naissance" required
                            onChange={(e) => setDate(e.target.value)}></input>
                    </div>
                    <br></br>

                    <div className="inline-flex justify-items-start">
                        <button type="submit" className="flex justify-center text-base w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500 ">Ajouter</button>
                    </div>
                </form>
            )}
        </div>
    )
}