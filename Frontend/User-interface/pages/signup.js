import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import EgovIcon from "../Components/Icon/EgovIcon";
import { useRouter } from "next/router";

const signup = () => {
  const notSent = 0;
  const sent = 1;
  const invalid = -1;
  const [valid, setValid] = useState(notSent); //Destructuring 
  const router= useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    //post request to the backend to create a new user
    axios.post("http://localhost:8090/api/v/registration", data).then((res) => {
      console.log(res);
      setValid(sent);
    }).catch(err => alert("CIN deja utilisé"));
  };

  return (
    <section className="bg-gray-50 p-4 ">
      {(valid == notSent || valid == invalid) && (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            <div><EgovIcon/></div>
            E-auth
          </a>
          <div className="w-full bg-white rounded-lg shadow overflow-scroll md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Créer un nouveau Compte
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Prénom:
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Saisir votre prénom"
                    required
                    {...register("firstName", { required: true })}
                  />
                </div>
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Saisir votre nom"
                    required
                    {...register("lastName", { required: true })}
                  />
                </div>
                <div>
                  <label
                    for="cin"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    CIN:
                  </label>
                  <input
                    type="text"
                    name="cin"
                    id="cin"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Saisir votre CIN"
                    required
                    {...register("cin", { required: true })}
                  />
                </div>

                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                    {...register("password", { required: true })}
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Saisir votre email"
                    required
                    {...register("email", { required: true })}
                  />
                </div>
                <div>
                  <label
                    for="Birthday"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Date Of Birth:
                  </label>
                  <input
                    type="date"
                    name="Birthday"
                    id="Birthday"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                    {...register("dateNaissance", { required: true })}
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Phone Number:
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="+216 XX XXX XXX"
                    required
                    {...register("phone", { required: true })}
                  />
                  <input
                    type="text"
                    name="userRole"
                    id="userRole"
                    value={"USER"}
                    className="hidden"
                    {...register("userRole", { required: true })}
                  />
                </div>


                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      J'accepte{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline "
                        href="#"
                      >
                        les termes et les conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Vous avez déjà un compte?{" "}
                  <a
                    href="/signin"
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Connectez-vous
                  </a>
                </p>
                {valid == invalid && (
                  <p className=" text-red-700 $" role="alert">
                    Something went wrong please retry
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
      {(valid == 1) && (<section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
          >
            <EgovIcon />
            E-auth
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 items-center text-center ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-center">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center ">
                Vérification
              </h1>
              <div>
                <p className="text-center text-lg ">
                  Vous venez de créer un compte sur <b>E-gov</b>. Avant de pouvoir utiliser votre compte, vous devez vérifier que cette adresse e-mail est bien la vôtre.
                  Veuillez consulter votre boite mail
                  </p>
              </div>
              <button
                className="w-6/12 text-white bg-blue-400 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  onClick={()=> router.push("signin")}
              >OK</button>
            </div>
          </div>
        </div>
      </section>)}
    </section>
  );
};

export default signup;
