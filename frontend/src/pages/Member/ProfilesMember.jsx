import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updateUser } from '../../store/userSlice';
import Sidebar from './Sidebar';
import { ClassesContainer, Content } from '../../styles/ClassesStyles';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa'; // Import de l'icône d'avatar
import NavBar from '../Admin/NavBar';

const ProfilesMember = () => {
    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [genre, setGenre] = useState('');
    const [image, setImage] = useState(null); // État pour l'image de profil
    const [imagePreview, setImagePreview] = useState(null); // État pour l'aperçu de l'image

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/api/users/userDetail', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const userData = response.data;

                setId(userData.id);
                setName(userData.name);
                setEmail(userData.email);
                setGenre(userData.gender);
                setPassword(userData.password);
                setImage(userData.image); // Récupération de l'image
                setImagePreview(userData.image ? userData.image : null); // Prévoir l'aperçu de l'image
            } catch (error) {
                console.error('Erreur lors de la récupération des détails de l’utilisateur :', error);
            }
        };

        fetchUserDetails();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file)); // Créer un URL pour l'aperçu
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(); // Pour transmettre des données, y compris le fichier image
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('gender', genre);
        if (image) {
            formData.append('image', image); // Ajouter l'image au FormData si elle existe
        }

        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(`http://localhost:8080/api/users/update/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Utilisateur mis à jour :', response.data);
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l’utilisateur :', error.response ? error.response.data : error.message);
        }
    };

    return (
        <>
            <NavBar />
            <Sidebar />
            <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8 mt-28">
                <h1 className="text-2xl mb-6 text-center">Modifier votre profil</h1>
                <form className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
                    <div className="flex items-center justify-center mb-4">
                        {imagePreview ? (
                            <img src={imagePreview} alt="Profile" className="w-16 h-16 rounded-full" />
                        ) : (
                            <FaUserCircle size={64} className="text-gray-400" />
                        )}
                        <input type="file" accept="image/*" onChange={handleImageChange} className="ml-4" />
                    </div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nom complet*</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Titre"
                        className="w-full p-3 mb-4 border border-gray-200 rounded-md"
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2">Adresse mail*</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Adresse mail"
                        className="w-full p-3 mb-4 border border-gray-200 rounded-md"
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2">Mot de passe*</label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mot de passe"
                            className="w-full p-3 mb-4 border border-gray-200 rounded-md"
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