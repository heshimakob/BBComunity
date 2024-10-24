import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updateUser } from '../../store/userSlice';
import Sidebar from './Sidebar';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import swal from 'sweetalert';
import NavBar from './NavBar';

const ProfilesMember = () => {
    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [genre, setGenre] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8080/api/users/logout');
            localStorage.removeItem('token');
            window.location.href = '/signin';
            swal("Deconnexion!", "Déconnexion réussie!", "success");
        } catch (error) {
            console.error("Erreur lors de la déconnexion:", error);
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

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log(token);
                const response = await axios.get('http://localhost:8080/api/users/userDetail', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const userData = response.data;
                console.log(userData); // Assurez-vous que l'ID est présent ici

                if (userData._id) {
                    setId(userData._id);
                } else {
                    console.error("L'ID de l'utilisateur est manquant dans la réponse");
                }
                setName(userData.name);
                setEmail(userData.email);
                setGenre(userData.gender);
                setPassword(userData.password);
                setImage(userData.image);
                setImagePreview(userData.image ? userData.image : null);
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
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Ajout de cette ligne pour empêcher le rechargement de la page.

        if (!id) {
            console.error('L\'ID de l\'utilisateur est indéfini. Impossible de mettre à jour.');
            return; // Quitter la fonction si l'ID est manquant
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('gender', genre);
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await axios.put(`http://localhost:8080/api/users/update/${id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            swal("Modification!", "Modification réussie!", "success");
            console.log('Utilisateur mis à jour :', response.data);
        } catch (error) {
            swal("Mofication!", "Echec de Modiciation!", "error");
            console.error('Erreur lors de la mise à jour de l’utilisateur :', error.response ? error.response.data : error.message);
        }
    };

    return (
        <>
            <NavBar />
            <Sidebar />

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl text-red-500">Confirmation de Déconnexion</h2>
                        <p className="text-lg">Voulez-vous vraiment vous déconnecter ?</p>
                        <button className="bg-red-500 text-lg text-white font-bold rounded-lg w-full mt-4 p-2" onClick={() => handleModalClose(true)}>Oui</button>
                        <button className="bg-blue-500 text-lg text-white font-bold rounded-lg w-full mt-2 p-2" onClick={() => handleModalClose(false)}>Non</button>
                    </div>
                </div>
            )}

            <div className="bbc-container mx-auto my-8 px-4 sm:px-6 lg:px-8 mt-28 mb-32">
                <h1 className="text-2xl mb-6 text-center">Modifier votre profil</h1>
                <form className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-center mb-4">
                        {imagePreview ? (
                            <img src={imagePreview} alt="Profile" className="w-32 h-32 rounded-full bg-gray-500" />
                        ) : (
                            <FaUserCircle className="text-gray-400 w-32 h-32 " />
                        )}
                        <input type="file" accept="image/*" onChange={handleImageChange} className="mt-4" />
                    </div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nom complet*</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Votre nom complet"
                        required
                        className="w-full p-3 mb-4 border border-gray-200 rounded-md"
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2">Adresse mail*</label>
                    <input
                        type="email"
                        value={email}
                        required
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
                            placeholder="Nouveau mot de passe"
                            required
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

                <div className='flex justify-center mt-4'>
                    <button
                        className="bg-red-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        onClick={confirmLogout}>
                        Deconnexion
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProfilesMember;
