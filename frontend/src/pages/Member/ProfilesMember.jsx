import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updateUser } from '../../store/userSlice';
import Sidebar from './Sidebar';
import { ClassesContainer, Content } from '../../styles/ClassesStyles';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import NavBar from '../Admin/NavBar';

const ProfilesMember = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [genre, setGenre] = useState('');

    // Hook pour récupérer les détails de l'utilisateur
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const token = localStorage.getItem('token'); // Assurez-vous que le jeton est stocké
                const response = await axios.get('http://localhost:8080/api/users/userDetail', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const userData = response.data;

                // Mettez les champs de l'état avec les données utilisateur récupérées
                setName(userData.name);
                setEmail(userData.email);
                setGenre(userData.gender);
                setPassword(userData.password);
            } catch (error) {
                console.error('Erreur lors de la récupération des détails de l’utilisateur :', error);
            }
        };

        fetchUserDetails();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.put('http://localhost:8080/api/userUpdate', {
                name,
                email,
                password,
                gender: genre
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            // Mettez à jour l'utilisateur dans le store Redux ou affichez un message de succès
            console.log('Utilisateur mis à jour :', response.data);
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l’utilisateur :', error);
        }
    };

    return (
        <>
            <NavBar />
            <Sidebar />
            <div className="container mx-auto mt-28">
                        <h1 className="text-2xl mb-10">Modifier votre profile</h1>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Nom complet*</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Titre"
                                 className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                            />
                            <label className="block text-gray-700 text-sm font-bold mb-2">Adresse mail*</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Adresse mail"
                                 className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                            />
                            <label className="block text-gray-700 text-sm font-bold mb-2">Mot de passe*</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Mot de passe"
                                    className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                                />
                                <span className="absolute top-3 right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                                </span>
                            </div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Identité de genre*</label>
                            <select
                                id="gender"
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                                className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                            >
                                <option value="male">Homme</option>
                                <option value="female">Femme</option>
                                <option value="other">Autre</option>
                            </select>
                            <button
                                className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                type="submit"
                            >
                                Mettre à jour
                            </button>
                        </form>
                    </div>
        </>
    );
};

export default ProfilesMember;