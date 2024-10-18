import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import B from "../../assets/B.png";
import { BsGraphUp, BsBook, BsSendDash, BsCalendarEvent, BsUpload } from 'react-icons/bs';
import axios from 'axios';
import swal from 'sweetalert'; // Assurez-vous que sweetalert est installé

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour gérer la modal de confirmation

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8080/api/users/logout');
      localStorage.removeItem('token');
      window.location.href = '/signin';
      swal("Déconnexion!", "Déconnexion réussie!", "success");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
      swal("Erreur!", "Erreur lors de la déconnexion.", "error");
    }
  };

  const confirmLogout = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = (confirm) => {
    setIsModalOpen(false);
    if (confirm) {
      handleLogout();
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
          <Link to="#" onClick={confirmLogout} className="text-white">Déconnexion</Link>
        </li>
      </ul>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-200">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Confirmation de Déconnexion</h2>
            <p className="mb-4">Êtes-vous sûr de vouloir vous déconnecter ?</p>
            <div className="flex justify-end">
              <button 
                className="bg-red-500 text-white py-2 px-4 rounded mr-2" 
                onClick={() => handleModalClose(true)}>
                Oui
              </button>
              <button 
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded" 
                onClick={() => handleModalClose(false)}>
                Non
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
