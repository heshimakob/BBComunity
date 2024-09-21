import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Sidebar from './Sidebar';
import NavBar from '../Admin/NavBar';

import { FaUserMd, FaPhone, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import Cours from '../../components/Cours';

const DashboardMember = ({}) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

//   useEffect(()=>{
//     setProgress(40);
//     setTimeout(()=>{
//         setProgress(100)
//     },3000)
// },[]);


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
    return <div>Chargement des détails de l'utilisateur...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      <NavBar />
      <Sidebar />
      <div className="flex flex-col md:flex-row md:h-screen p-10 md:ml-32 md:mt-20">
        <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mt-10">
              <img className="rounded-full w-32 h-32" src={user.image} alt="User" />
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0 md:ml-6">
              <h2 className="text-3xl font-semibold">{user.name}</h2>
              <p className="text-gray-600 text-2xl">{user.role}</p>
              <div className="flex flex-col mt-4">
                <div className="flex items-center">
                  <FaUser className="text-gray-500 mr-2" />
                  <span className='text-2xl'>{user.genre}</span>
                </div>
                <div className="flex items-center mt-2">
                  <FaMapMarkerAlt className="text-gray-500 mr-2" />
                  <span>Springfield</span>
                </div>
                <div className="flex items-center mt-2">
                  <FaCalendarAlt className="text-gray-500 mr-2" />
                  <span>25/09/2020, 10:45 AM</span>
                </div>
                <div className="flex items-center mt-2">
                  <FaPhone className="text-gray-500 mr-2" />
                  <span>+1-555-123-4567</span>
                </div>
                <div className="flex items-center mt-2">
                  <FaEnvelope className="text-gray-500 mr-2" />
                  <span>john.doe@example.com</span>
                </div>
              </div>
            </div>
            <div> 
         
               </div>
          </div>
          <div className=' flex flex-col mb-0 bottom-0 mt-52'>
            <div className='bbc-container mb-10 mt-10'>
              <h1 className='text-gray-500 text-5xl'>Black Born Community Les cours mise A jours</h1>
            </div>
          <Cours/>
          </div>
        </div>





        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 mt-6 md:mt-0 md:ml-6 mb-20">
          <h3 className="text-4xl font-semibold mb-4">Medical History</h3>
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
