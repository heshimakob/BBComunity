// 

// import React, { useState } from 'react';
// import axios from 'axios';

// 
// import { Link, useNavigate } from 'react-router-dom';
// import { signInStart,signInFailure,signInSuccess } from "../store/userSlice";
// import { useDispatch, useSelector } from "react-redux";
// const SignIn  =()=>{
//   // const [formData, setFormData] = useState({});
//   const {email,setEmail}=useState();
//   const {password,setPassword}=useState();
//   const [loading, setLoading] = useState(false);
//     const { error: errorMessage, user } = useSelector((state) => state.users);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
//   };
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!formData.email || !formData.password) {
// //         return dispatch(signInFailure('Please fill all the fields'));
// //     }
// //     try {
// //         setLoading(true);
// //         const res = await fetch('http://localhost:8080/api/users/signin', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //                 Accept: 'application/json'
// //             },
// //             body: JSON.stringify(formData),
// //         });
// //         const data = await res.json();
// //         console.log(data)
       
// //         if (data.success === false) {
// //             dispatch(signInFailure(data.message));
           
// //         } else {
// //             dispatch(signInSuccess({data}));
    
         
// //             if (data.user.isAdmin === false) {
// //               navigate('/member/dashboard'); 
             
// //             } else if (data.user.isAdmin === true) {
// //               navigate('/admin/dashboard'); 
// //               toast.success('Connexion réussie en tant qu\'admin!');
// //             } else {
// //               navigate('/errorPage'); 
// //               toast.error('Erreur de connexion!');
// //             }
// //         }
// //     } catch (error) {
// //         dispatch(signInFailure(error.message));
// //     } finally {
// //         setLoading(false);
// //     }
// // };
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await axios.post('http://localhost:8080/api/users/signin', {email, password });
//     const { token, isAdmin } = response.data;
//     dispatch(signInSuccess({ token, isAdmin }));
//     localStorage.setItem('token', token);
//     window.location.href = isAdmin ? '/admin/dashboard' : '/member/dashboard';
//   } catch (error) {
//     console.error(error);
//   }
// };


//     return(
//       <div className='h-screen flex'>
//      <div className=" h-screen w-1/3 p-20  mt-30 flex flex-col items-center ">
//         {/* left */}
     
        
          
         
        
       
//         {/* right */}

     

      
//       </div>
     
//       <Toaster/>
//     </div>
  


//     )
// }

// export default SignIn;





import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { signInSuccess ,signInFailure} from '../store/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import bglog from "../assets/bglog.jpeg"
import toast,{Toaster} from 'react-hot-toast';
import B from "../assets/B.png"
import swal from "sweetalert";

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { error: errorMessage, user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const resetForm = () => {
    setEmail('');
    setPassword('');
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080/api/users/signin', { email, password });
      const { token, isAdmin } = response.data;
      dispatch(signInSuccess({ token, isAdmin }));
      localStorage.setItem('token', token);
      // toast.success('');
      swal("Connecter!", "Connexion réussie!", "success");

    
      window.location.href = isAdmin ? '/admin-dashboard' : '/user-dashboard';
    } catch (error) {
      swal("Connecter!", "Echec de connexion!", "error");
      resetForm();
      console.error(error);
    }
  };

  return (
<div className='h-screen flex'>
<div className=" h-screen w-1/3 p-20  mt-30 flex flex-col items-center ">
<div className="text-center flex flex-col items-center  " >
        <h1 className="text-3xl text-gray-300  mb-10">Black Born Community</h1>      
          <img src={B} width="20%" height="200px"  alt='logo bbc' />
      <h1 className="text-2xl mb-10">Se connecter</h1>
        </div>

    <form className='mt-20'  onSubmit={handleSubmit}>
          
            <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
         Adresse mail* 
         </label>
              <input
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={(e) => setEmail(e.target.value)}

                 className="w-full p-3 mb-6 border border-gray-200 rounded-md"
              />
    
            <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
         Mot de passe* 
         </label>
              <input
                type='password'
                placeholder='Mot de passe'
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                 className="w-full p-3 mb-6 border border-gray-200 rounded-md"
              />
        
            <button
            className="w-full bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                
                  <span className='pl-3 text-white font-bold'>Loading...</span>
                </>
              ) : (
                'Se connecter'
              )}
            </button>
        
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Vous n'avez pas de compte?</span>
            <Link to='/register' className='text-blue-500'>
              Creer un compte
            </Link>
          </div>
          {errorMessage && (
            <span className='mt-5' color='failure'>
              {errorMessage}
            </span>
          )}
            <div className='mb-0 mt-auto text-center items-center'>
          <p className=' text-gray-300  mb-10'>Black Born community @copyright 2024</p>
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
    
         </div>
         <Toaster/>
       
         </div>
       
      
    // <form onSubmit={handleSubmit}>
    //   <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
    //   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    //   <button type="submit">Login</button>
    // </form>
  );
};

export default Login;