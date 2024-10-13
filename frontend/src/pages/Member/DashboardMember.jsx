import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

import Loading from "../../components/Loading"

import { FaUserMd, FaPhone, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaUser, FaGenderless, FaCriticalRole } from 'react-icons/fa';
import Cours from '../../components/Cours';
import NavBar from './NavBar';
import AllCours from './component/AllCours';

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
                <section className="pt-8 pb-2 bg-blueGray-50 mt-32">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap -mx-3">
      <div className="w-full md:w-1/3 px-3 mb-6">
        <div className="p-6 shadow bg-white rounded">
          <div className="flex justify-between">
            <p className="text-sm md:text-base text-blueGray-400">Cours</p>
            <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">Mois</span>
          </div>
          <p className="text-3xl lg:text-4xl font-bold font-heading">8 </p>
          <p className="text-sm md:text-base text-blueGray-500">
            <span className="text-green-600">+80% </span>
            Reduction
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6">
        <div className="p-6 shadow bg-white rounded">
          <div className="flex justify-between">
            <p className="text-sm md:text-base text-blueGray-400">Projets</p>
            <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">Bootcamps</span>
          </div>
          <p className="text-3xl lg:text-4xl font-bold font-heading">15</p>
          <p className="text-sm md:text-base text-blueGray-500">
            <span className="text-green-600">+18% </span>
            Since last week
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6">
        <div className="p-6 shadow bg-white rounded">
          <div className="flex justify-between">
            <p className="text-sm md:text-base text-blueGray-400">Cours en attente</p>
            <span className="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">Monthly</span>
          </div>
          <p className="text-3xl lg:text-4xl font-bold font-heading">20</p>
          <p className="text-sm md:text-base text-blueGray-500">
            <span className="text-red-500">0% </span>
            mois derniers
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<AllCours/>


            </>
  );
};

export default DashboardMember;
