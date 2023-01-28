import React, { useEffect, useState } from "react";
import { EgovIcon } from "../components/icons";
import { useRouter } from "next/router";

const signin = () => {
  const [nom, setNom] = useState('')
  const [pass, setPass] = useState('')
  const router= useRouter()

  const onClickLogin=(e)=>{
    e.preventDefault();

    if(nom=='admin' && pass=='admin'){
      router.push("/")
    }
    else{
      alert("Verifier vos données")
    }
  }

  return (
    <section className="bg-gray-50 ">

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          <EgovIcon />
          E-auth
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in to your account
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
                  Nom d'utilisateur:
                </label>
                <input
                  type="text"
                  name="cin"
                  id="cin"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Saisir Nom d'utilisateur "
                  required
                  onChange={(e) => setNom(e.target.value)}
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
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <button
                className="w-full text-white bg-Indigo-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                onClick={onClickLogin}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default signin;
