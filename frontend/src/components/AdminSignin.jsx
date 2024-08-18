// import { useState } from "react";
// import {AdminSignInContainer,FormContainer,InputField, SubmitButton} from  "../styles/AdminSignInStyles"

import Textbox from "../components/Textbox";
import Button from "../components/Button"
import home from "../assets/home.png"
const AdminSignIn  =()=>{

    return(
      <div className="h-screen flex">
      <div
        className="bg-cover bg-center h-max md:h-screen w-2/3"
        style={{
          backgroundImage: 'url(https://www.shutterstock.com/shutterstock/photos/2177730489/display_1500/stock-vector-futuristic-sci-fi-modern-neon-gradient-glowing-circle-frame-with-glowing-mesh-on-dark-space-2177730489.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="p-10 text-white">
          <h1 className="text-3xl">Welcome to our website</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
      </div>
      <div className=" h-screen w-1/3 p-10 mt-20">
        <h1 className="text-2xl mb-10">Login</h1>
        <form>
  <input
    type="text"
    placeholder="Nom"
    className="w-full p-3 mb-6 border border-gray-200 rounded-md"
  />
  <input
    type="email"
    placeholder="Adresse e-mail"
    className="w-full p-3 mb-6  border border-gray-200 rounded-md"
  />
  <input
    type="tel"
    placeholder="Téléphone"
    className="w-full p-3 mb-6 border border-gray-200 rounded-md"
  />
  <input
    type="text"
    placeholder="Sujet"
    className="w-full p-3 mb-6  border border-gray-200 rounded-md"
  />
  <textarea
    placeholder="Message"
    className="w-full p-3 mb-6  border border-gray-200 rounded-md"
  ></textarea>
  <button
    className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
    type="submit"
  >
    Envoyer
  </button>
</form>
      </div>
    </div>

    )
}

export default AdminSignIn;