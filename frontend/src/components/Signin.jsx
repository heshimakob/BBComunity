import B from "../assets/B.png"

import React, { useState } from 'react';
import axios from 'axios';
import bglog from "../assets/bglog.jpeg"
import toast,{Toaster} from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { signInStart,signInFailure,signInSuccess } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
const SignIn  =()=>{
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
    const { error: errorMessage, user } = useSelector((state) => state.users);
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
        setLoading(true);
        const res = await fetch('http://localhost:8080/api/users/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success === false) {
            dispatch(signInFailure(data.message));
        } else {
            dispatch(signInSuccess(data));
            if (data.user.isAdmin) {
                navigate('/admin/dashboard'); // Pour les admins
                toast.success('Connexion réussie en tant qu\'admin!');
            } else {
                navigate('/member/dashboard'); // Pour les membres
                toast.success('Connexion réussie en tant que membre!');
            }
        }
    } catch (error) {
        dispatch(signInFailure(error.message));
    } finally {
        setLoading(false);
    }
};
 


    return(
      <div className='h-screen flex'>
     <div className=" h-screen w-1/3 p-20  mt-30 flex flex-col items-center ">
        {/* left */}
     
        <div className="text-center flex flex-col items-center " >
        <h1 className="text-2xl text-gray-300  mb-10">Black Born Community</h1>      
          <img src={B} width="40%" height="200px"  />
      <h1 className="text-2xl mb-10">Se connecter</h1>
        </div>

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
            <label htmlFor="mobile-number" className="block text-gray-700 text-sm font-bold mb-2">
         Password* 
         </label>
              <input
                type='password'
                placeholder='**********'
                id='password'
                onChange={handleChange}
                 className="w-full p-3 mb-6 border border-gray-200 rounded-md"
              />
            </div>
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
            <span>Dont Have an account?</span>
            <Link to='/register' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <span className='mt-5' color='failure'>
              {errorMessage}
            </span>
          )}
        
       
        {/* right */}

     

      
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
  


    )
}

export default SignIn;