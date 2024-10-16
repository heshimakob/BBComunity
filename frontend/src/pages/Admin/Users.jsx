import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../store/userSlice';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';
import UserTable from './componnent/UserTable';
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";

const Users = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // État pour le rôle

  // Liste des rôles disponibles
  const roles = [
    'Software Development',
    'Network',
    'Machine Learning',
    'Entreprenariat',
    'Art numérique et AR, VR et Design'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { name, email, password, role }; // Inclure le rôle dans les données
      const response = await dispatch(register(data));
      if (response.meta.requestStatus === 'fulfilled') {
        toast.success('Enregistrement avec succès!');
      } else {
        toast.error('Échec d\'enregistrement');
      }
    } catch (error) {
      if (error.message.includes('Email already exists')) {
        toast.error('L\'utilisateur existe déjà');
      } else {
        toast.error('Erreur inconnue');
      }
    } finally {
      // Add this finally block to ensure the toast notification is displayed
      toast.doneWaiting();
    }
  };

  return (
    <>
      <NavBar />
      <Sidebar />
      <div className="container mx-auto p-4 mt-32 pt-6 pb-6 md:p-6 lg:p-12">
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-bold mb-2">
            <span className="text-gray-700">Nom complet*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="block w-full border border-gray-200 p-3 pl-10 text-sm text-gray-700 rounded-md"
          />

          <label className="block mb-2">
            <span className="text-gray-700">Adresse mail</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full border border-gray-200 p-3 pl-10 text-sm text-gray-700 rounded-md"
          />

          <label className="block mb-2">
            <span className="text-gray-700">Mot de passe</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full border border-gray-200 p-3 pl-10 text-sm text-gray-700 rounded-md"
            />
          </label>

          {/* Sélecteur de rôles */}
          <label className="block mb-2">
            <span className="text-gray-700">Sélectionner un rôle*</span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="block w-full border border-gray-200 p-3 pl-10 text-sm text-gray-700 rounded-md"
            >
              <option value="">Choisissez un rôle</option>
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Inscrire
          </button>
        </form>
        <Toaster />
        <UserTable className="pt-10" />
      </div>
    </>
  );
};

export default Users;
