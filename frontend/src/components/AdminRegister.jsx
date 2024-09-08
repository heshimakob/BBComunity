// import { useState } from "react";
// import {AdminSignInContainer,FormContainer,InputField, SubmitButton} from  "../styles/AdminSignInStyles"

// import Textbox from "../components/Textbox";
// import Button from "../components/Button"
// import home from "../assets/home.png"
import B from "../assets/B.png"

import React, { useState } from 'react';
import axios from 'axios';
import bglog from "../assets/bglog.jpeg"
import { Link } from 'react-router-dom';
const AdminRegister  =()=>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/api/users/signin', { email, password }); 
      if (response.status === 200) {
        // Sign-in successful, redirect to admin dashboard
        window.location.href = '/admin/dashboard';
      } else {
        // Handle sign-in errors
        console.error('Sign-in failed');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };


    return(
      <div className="h-screen flex">
    
      <div className=" h-screen w-1/3 p-20  mt-30 flex flex-col items-center ">
     
        <div className="text-center flex flex-col items-center ">
        <h1 className="text-2xl text-gray-300  mb-10">Black Born Community</h1>
        <img src={B} width="20%" height="200px" />
        <h1 className="text-2xl mb-10">S'enregister</h1>
        </div>
        <form>
        <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
           Adresse mail* 
        </label>
  <input
    type="email"
    placeholder="exemple@gmail.com"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="w-full p-3 mb-6 border border-gray-200 rounded-md"
  />
  <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
          Numero de telephone*
        </label>
  <input
     type="text"
     placeholder="Numero de telephone"
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     required
    className="w-full p-3 mb-6  border border-gray-200 rounded-md"
  />
<label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
          Domaine*
        </label>
        <select
          id="gender"
          className="w-full p-3 mb-6  border border-gray-200 rounded-md"
        >
          <option value="male">Software  Development</option>
          <option value="female">Machine Learning</option>
          <option value="other">Design</option>
          <option value="other">Entreprenariat</option>
        </select>
    <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
          Mot de pass* 
        </label>
  <input
     type="password"
     placeholder="Password"
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     required
    className="w-full p-3 mb-6  border border-gray-200 rounded-md"
  />
 
  <button
    className="w-full bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
    type="submit"
    onClick={handleSignIn}>
  
    S'inscrire
  </button>
</form>
<div className="flex flex-col  justify-center items-center">
  <span className='text-blue-500 hover:text-blue-700 font-bold pt-5 '><Link to="/signin">Se connecter</Link></span>
  {/* <span className='text-blue-800 font-bold pt-5 '><Link>Mot de pass oublie?</Link></span> */}
</div>
      </div>

      <div
        className="bg-cover bg-center h-max md:h-screen w-2/3"
        style={{
          backgroundImage:  `url(${bglog})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* <div className="p-10 text-white">
          <h1 className="text-3xl">Welcome to our website</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div> */}
      </div>
    </div>

    )
}

export default AdminRegister;