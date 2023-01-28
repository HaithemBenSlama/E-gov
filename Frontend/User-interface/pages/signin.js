import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import EgovIcon from "../Components/Icon/EgovIcon";

const signin = () => {
  const notSent = 0;
  const sent = 1;
  const invalid = -1;
  const [valid, setValid] = useState(notSent);
  const [cin,setCin] = useState('');
  const [pass, setPass]= useState('');
  const router= useRouter();

  const onSubmit = (e) => {
    //post request to the backend to auth a user
    e.preventDefault();
    axios.post("http://localhost:8090/api/v/signin", {cin: cin, password:pass}).then((res) => {
      if(res.data==-1){
        alert("Mot de passe incorrect");
        return
      }
      else{
        localStorage.setItem("isConnected", true);
        localStorage.setItem("idUser", res.data);
        router.push("/")
      }
    }).catch(err=>alert("Utilisateur n'existe pas"));
  };
  return (
    <section className="bg-gray-50 ">
      {(valid == notSent || valid == invalid || valid=="echec") && (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
          >
            <EgovIcon/>
            E-auth
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Connectez-vous à votre compte
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="cin"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    CIN
                  </label>
                  <input
                    type="text"
                    name="cin"
                    id="cin"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Saisir votre CIN"
                    required
                    onChange={(e)=>setCin(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                    onChange={(e)=>setPass(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-gray-500 ">
                      Se rappeler de moi
                      </label>
                    </div>
                  </div>
                  
                </div>
                <button
                  onClick={onSubmit}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Se connecter
                </button>
                <p className="text-sm font-light text-gray-500 ">
                Vous n'avez pas encore de compte?
                                  <Link
                    href="/signup"
                    className="font-medium text-primary-600 hover:underline pl-2"
                  >
                    S'inscrire
                  </Link>
                </p>
                {valid == "echec" && (
                  <p className=" text-red-700 $" role="alert">
                    Something went wrong please retry
                    {alert("Password Incorrect")}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default signin;
