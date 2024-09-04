// import { useState } from "react";
// import {AdminSignInContainer,FormContainer,InputField, SubmitButton} from  "../styles/AdminSignInStyles"

// import Textbox from "../components/Textbox";
// import Button from "../components/Button"
// import home from "../assets/home.png"
import B from "../assets/B.png"

import React, { useState } from 'react';
import axios from 'axios';
import bglog from "../assets/bglog.jpeg"
import { Link, useNavigate } from 'react-router-dom';
import { signInStart,signInFailure,signInSuccess } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
const SignIn  =()=>{
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('http://localhost:8080/api/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/member/dashboard');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };


  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSignIn = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const response = await axios.post('http://localhost:8080/api/users/signin', { email, password }); 
  //     if (response.status === 200) {
  //       // Sign-in successful, redirect to admin dashboard
  //       window.location.href = '/admin/dashboard';
  //     } else {
  //       // Handle sign-in errors
  //       console.error('Sign-in failed');
  //     }
  //   } catch (error) {
  //     console.error('Error during sign-in:', error);
  //   }
  // };


    return(
      <div className='h-screen flex'>
     <div className=" h-screen w-1/3 p-20  mt-30 flex flex-col items-center ">
        {/* left */}
     
        <div className="text-center flex flex-col items-center ">
        <h1 className="text-2xl text-gray-300  mb-10">Black Born Community</h1>        <img src={B} width="40%" height="200px" />
      <h1 className="text-2xl mb-10">Se connecter</h1>
        </div>
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-4xl">Welcome Back</span> 
          <form  onSubmit={handleSubmit}>
            <div>
            <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
         Adresse mail* 
         </label>
              <input
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}

                 className="w-full p-3 mb-6 border border-gray-200 rounded-md"
              />
            </div>
            <div>
              <label value='Your password' />
              <input
                type='password'
                placeholder='**********'
                id='password'
                onChange={handleChange}
                 className="w-full p-3 mb-6 border border-gray-200 rounded-md"
              />
            </div>
            <button
              className='purpleToBlue'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Se connecter'
              )}
            </button>
        
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Dont Have an account?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <span className='mt-5' color='failure'>
              {errorMessage}
            </span>
          )}
        
       
        {/* right */}

        <div
        className="bg-cover bg-center h-max md:h-screen w-2/3"
        style={{
          backgroundImage:  `url(${bglog})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
 
      </div>

      
      </div>
    </div>
//       <div className="h-screen flex">
    
//       <div className=" h-screen w-1/3 p-20  mt-30 flex flex-col items-center ">
     
//         <div className="text-center flex flex-col items-center ">
//         <h1 className="text-2xl text-gray-300  mb-10">Black Born Community</h1>
//         <img src={B} width="40%" height="200px" />
//         <h1 className="text-2xl mb-10">Se connecter</h1>
//         </div>
//         <form>
//         <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
//            Adresse mail* 
//         </label>
//   <input
//     type="email"
//     placeholder="exemple@gmail.com"
//     // value={email}
//     // onChange={(e) => setEmail(e.target.value)}
//     required
//     className="w-full p-3 mb-6 border border-gray-200 rounded-md"
//   />

  
//   <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
//           Mot de pass* 
//         </label>
//   <input
//      type="password"
//      placeholder="Password"
//     //  value={password}
//     //  onChange={(e) => setPassword(e.target.value)}
//      required
//     className="w-full p-3 mb-6  border border-gray-200 rounded-md"
//   />
 
//   <button
//     className="w-full bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
//     type="submit"
//     >
  
//     Se connecter
//   </button>
// </form>
// <div className="flex flex-col  justify-center items-center">
//   <span className='text-red-500 hover:text-red-700 font-bold pt-5 '><Link to="/register">S'inscrire</Link></span>
//   <span className='text-blue-800 font-bold pt-5 '><Link>Mot de pass oublie?</Link></span>
// </div>
//       </div>

//       <div
//         className="bg-cover bg-center h-max md:h-screen w-2/3"
//         style={{
//           backgroundImage:  `url(${bglog})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         {/* <div className="p-10 text-white">
//           <h1 className="text-3xl">Welcome to our website</h1>
//           <p className="text-lg">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
//             amet nulla auctor, vestibulum magna sed, convallis ex.
//           </p>
//         </div> */}
//       </div>
//     </div>

    )
}

export default SignIn;





// SignIn.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { signinUser } from '../store/userSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import toast, { Toaster } from 'react-hot-toast';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user, isAdmin } = useSelector((state) => state.users);

//   const handleSignIn = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8080/api/users/signin', { email, password });
//       if (response.status === 200) {
//         dispatch(signinUser(response.data));
//         if (response.data.isAdmin) {
//           toast.success('Connexion réussie');
//           navigate('/admin/dashboard');
       
//         } else {
//           toast.success('Connexion réussie');
//           navigate('/member/dashboard');
         
//         }
//         toast.success('Connexion réussie');
//       } else {
//         toast.error('Erreur de connexion');
//       }
//     } catch (error) {
//       toast.error('Erreur de connexion');
//     }
//   };

//   return (
//     <div className="h-screen flex">
//       {/* formulaire de connexion */}
//       <form onSubmit={handleSignIn}>
//         <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Adresse mail*</label>
//         <input
//        className="w-full p-3 mb-6 border border-gray-200 rounded-md"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Mot de pass*</label>
     
//         <input
//             className="w-full p-3 mb-6 border border-gray-200 rounded-md"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button   className="w-full bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded" type="submit">Se connecter</button>
//       </form>
//       <Toaster />
//       {/* lien vers la page d'inscription */}
//       <span >
//         <Link to="/register">S'inscrire</Link>
//       </span>
//       {/* lien vers la page de réinitialisation du mot de passe */}
//       <span>
//         <Link to="/forgot-password">Mot de pass oublié?</Link>
//       </span>
//     </div>
//   );
// };

// export default SignIn;