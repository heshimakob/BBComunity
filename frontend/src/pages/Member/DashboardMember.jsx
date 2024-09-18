import React, { useEffect } from 'react'

import { useState } from 'react';
import {
  FaDatabase,
  FaFileCode,
  FaTrophy,
  FaGraduationCap,
  FaCompass,
  FaCommentAlt,
} from 'react-icons/fa';


import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import NavBar from '../Admin/NavBar';
import axios from 'axios';


const DashboardMember = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // État de chargement

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('token');
      console.log(token)
      if (!token) {
        setError("Token manquant");
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get('http://localhost:8080/api/users/userDetail', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUser(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Erreur inconnue");
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) {
    return <div>Chargement des détails de l'utilisateur...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }



    return (
        <>
  
   <NavBar/>
 <Sidebar/>
     <div className="h-screen w-1/2 p-10  ml-32 mt-20">
     <div>
      <span><h1>Dashboard</h1></span>
      <span>{user.role}</span>

     </div>

     <div>
      <div className=''>
        <div>
          <div>
            <img src={user.image}/>
          </div>
          <div>
            <span>{user.name}</span>
            <div>
              <span>{user.sexe}</span>
              <span>bootcamp</span>
            </div>
          </div>
        </div>
        <div></div>

      </div>
     </div>
         
            {/* <div className="bg-white min-h-screen flex flex-col">
        <div className="flex items-center justify-between px-10 py-6">
        
          <div className="flex items-center">
          
      
          </div>
        </div>
        <div className="flex  mt-10">
          <h1 className="text-3xl font-bold">
            Welcome, {token.name}
          </h1>
        </div>
        <div className="flex justify mt-4">
          <p className="text-gray-500">
            Jump back in, or start something new.
          </p>
        </div>



        <div className="mt-16 px-10">
          <div className="grid grid-cols-6 gap-10">
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
              <FaDatabase className="text-4xl text-blue-500 mb-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Datasets</h3>
                <span className="text-gray-500">0 total created</span>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
              <FaFileCode className="text-4xl text-green-500 mb-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Notebooks</h3>
                <span className="text-gray-500">
                  4
                  <span className="text-xs text-gray-400 ml-1">
                    ^3
                  </span>{' '}
                  total created
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
              <FaTrophy className="text-4xl text-yellow-500 mb-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Competitions</h3>
                <span className="text-gray-500">0 total joined</span>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
              <FaCommentAlt className="text-4xl text-purple-500 mb-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Discussions</h3>
                <span className="text-gray-500">0 total posted</span>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
              <FaGraduationCap className="text-4xl text-blue-500 mb-4" />
              <div>
                <h3 className="text-lg font-bold mb-2">Courses</h3>
                <span className="text-gray-500">0 total completed</span>
              </div>
            </div>
          </div>
        </div>





        <div className="mt-16 px-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold mb-4">
              How to start: Choose a focus for today
            </h2>
          
          </div>
          <p className="text-gray-500 mb-8">
            Help us make relevant suggestions for you
          </p>





        </div>
   
      </div> */}
      </div>
        </>
    
    );
}

export default DashboardMember;