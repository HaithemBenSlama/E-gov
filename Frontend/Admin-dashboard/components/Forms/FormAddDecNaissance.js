import React, { useEffect, useState } from "react";
import axios from "axios";


export default function FormAddDecNaissance() {

    const [data, setData] = useState([]);
    const [valid, setValid] = useState("notSend");
    const [cinP, setCinP] = useState('');
    const [cinM, setCinM] = useState('');
    const [nom, setNom] = useState('');
    const [prenom,setPrenom]=useState('');
    const [genre,setGenre]= useState('');
    const [lieu, setLieu] = useState('');
    const [date, setDate] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8090/api/v/user')
            setData(result.data)
            setGenre("MALE")
        }
        fetchData()
    }, [])
    const onSubmitAdd = async (e) => {
        e.preventDefault();
        const userP = data.filter(user => user.cin == cinP)
        const userM = data.filter(user => user.cin == cinM)
        if (userP.length == 0) {
            alert("Utilisateur avec CIN Père n'existe pas")
            return
        }
        if (userM.length == 0) {
            alert("Utilisateur avec CIN Mére n'existe pas")
            return
        }
        try {
            let datau = { cinH: cinP, firstNameH: userP[0].firstName, lastNameH: userP[0].lastName, firstNameF: userM[0].firstName, lastNameF: userM[0].lastName, firstNameJ: nom, lastNameJ:prenom, juniorGender:genre ,dateNaissance: date, lieu: lieu }
            console.log(datau)
            const resp = await axios.post('http://localhost:8090/api/v/declarationnaissance', datau)
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
                            CIN Père:
                        </label>
                        <input type="text" id="lastName" name="lastName" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="CIN Homme" required
                            onChange={(e) => setCinP(e.target.value)}></input>
                    </div>
                    <div>
                        <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                            CIN mère:
                        </label>
                        <input type="text" id="firstName" name="firstName" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="CIN Femme" required
                            onChange={(e) => setCinM(e.target.value)}></input>
                    </div>

                    <div>
                        <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                            Nom de l'enfant:
                        </label>
                        <input type="text" id="cin" name="cin" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Nom" required
                            onChange={(e) => setNom(e.target.value)}></input>
                    </div>

                    <div>
                        <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                            Prenom de l'enfant:
                        </label>
                        <input type="text" id="dateNaissance" name="dateNaissance" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Prenom" required
                            onChange={(e) => setPrenom(e.target.value)}></input>
                    </div>

                    <div>
                        <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                            Genre :
                        </label>
                        <select
                            name="genre"
                            id="genre"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5"
                            required
                            onLoad={(e) => setGenre(e.target.value)} onChange={(e) => setGenre(e.target.value)}>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                        </select>

                    </div>

                    <div>
                        <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                            Date de naissaince :
                        </label>
                        <input type="date" id="dateNaissance" name="dateNaissance" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Date de naissance" required
                            onChange={(e) => setDate(e.target.value)}></input>
                    </div>

                    <div>
                        <label className="block mb-2 ml-2 text-sm font-semibold text-gray-900">
                            Lieu:
                        </label>
                        <input type="text" id="dateNaissance" name="dateNaissance" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Lieu" required
                            onChange={(e) => setLieu(e.target.value)}></input>
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