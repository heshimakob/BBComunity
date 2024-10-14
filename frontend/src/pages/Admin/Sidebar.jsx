import React from 'react';
import { Link } from 'react-router-dom';
import B from "../../assets/B.png";
import { BsGraphUp, BsBook, BsSendDash, BsCalendarEvent, BsUpload } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Sidebar = () => {
  const handleLogout = async () => {
    try {
      // Effectuer la requête de déconnexion vers le serveur
      await axios.post('http://localhost:8080/api/users/logout');
      
      // Supprimez le token JWT du stockage du navigateur
      localStorage.removeItem('token'); // ou sessionStorage.removeItem('token');

      // Optionnel : Rediriger l'utilisateur vers la page de connexion
      window.location.href = '/signin';
      alert("Vous êtes déconnecté.");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  return (
    <div className="fixed top-16 left-0 w-40 h-[calc(100%-60px)] bg-gray-950 text-white overflow-y-auto transition-all duration-300 ease-in-out z-100">
      <ul className="list-none p-0 m-0">
        <li className="flex flex-col items-center py-3 px-4 text-lg border-b border-gray-600 hover:bg-gray-700">
          <div className="text-2xl mb-2"><BsGraphUp /></div>
          <Link to="/admin-dashboard" className="text-white">Dashboard</Link>
        </li>

        <li className="flex flex-col items-center py-3 px-4 text-lg border-b border-gray-600 hover:bg-gray-700">
          <div className="text-2xl mb-2"><BsBook /></div>
          <Link to="/admin-cours" className="text-white">Courses</Link>
        </li>

        <li className="flex flex-col items-center py-3 px-4 text-lg border-b border-gray-600 hover:bg-gray-700">
          <div className="text-2xl mb-2"><BsSendDash /></div>
          <Link to="/admin-blog" className="text-white">Blog</Link>
        </li>

        <li className="flex flex-col items-center py-3 px-4 text-lg border-b border-gray-600 hover:bg-gray-700">
          <div className="text-2xl mb-2"><BsCalendarEvent /></div>
          <Link to="/candidate" className="text-white">Candidat</Link>
        </li>

        <li className="flex flex-col items-center py-3 px-4 text-lg border-b border-gray-600 hover:bg-gray-700">
          <div className="text-2xl mb-2"><BsUpload /></div>
          <Link to="/admin-users" className="text-white">Users</Link>
        </li>

        <li className="flex flex-col items-center py-3 px-4 text-lg border-b border-gray-600 hover:bg-gray-700">
          <div className="text-2xl mb-2"><BsGraphUp /></div>
          <Link to="/" onClick={handleLogout} className="text-white">Déconnexion</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
