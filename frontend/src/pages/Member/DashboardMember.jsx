import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

import Loading from "../../components/Loading"

import { FaUserMd, FaPhone, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaUser, FaGenderless, FaCriticalRole } from 'react-icons/fa';
import Cours from '../../components/Cours';
import NavBar from './NavBar';

const DashboardMember = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('token');
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
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
    <NavBar/>
      
      {/* <Sidebar /> */}
      <div className="flex flex-col md:flex-row md:h-screen p-10 md:ml-32 md:mt-20 bg-gray-200">
        <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-6">
          <div className="bbc-container flex flex-col md:flex-row items-center bg-slate-300 rounded-xl">
            
            <div className="md:w-1/3 mt-10 flex justify-between ml-10">
             <div  className="h-[100%] w-[100%]">
             {user.image ? (
                <img className="rounded-lg w-80 h-[100%]" src={user.image} alt="User" />
              ) : (
                <FaUser className="rounded-full w-32 h-32" />
              )}
             </div>

             <div className='flex justify-between  ml-10 '>
  <h2 className="text-3xl font-semibold">{user.name}</h2>
  <p className="text-gray-600 text-xl flex items-center">
    <FaCriticalRole  />
    {user.role}
  </p>
  <p className="text-gray-600 text-xl flex items-center">
    <FaGenderless/>
    {user.genre}
  </p>
</div>
              
            </div>
        
           
          </div>
          <div>
          <p className="text-gray-600 text-2xl">{user.role}</p>
          <p className="text-gray-600 text-2xl">{user.genre}</p>
          </div>

          <div className=' flex flex-col mb-0 bottom-0 mt-52'>
            <div className='bbc-container mb-10 mt-10'>
              <h1 className='text-gray-500 text-5xl'>Black Born Community Les cours mise A jours</h1>
            </div>
          <Cours/>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 mt-6 md:mt-0 md:ml-6 mb-20">
          <h3 className="text-4xl font-semibold mb-4"> Historique des Cours</h3>
          <ul className="list-disc pl-5">
            <li>Fractured Arm</li>
            <li>Hey you are looking very good</li>
            <li>Johnson And Johnson Plaza, New Brunswick, NJ</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardMember;
