import B from "../assets/B.png";
import React, { useState } from 'react';
import axios from 'axios';
import bglog from "../assets/bglog.jpeg";
import { Link } from 'react-router-dom';
import toast,{Toaster} from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(''); // Pour numéro de téléphone
    const [genre, setGenre] = useState('male'); // Pour genre
    const [domaine, setDomaine] = useState('Software Development'); // Pour domaine
    const [password, setPassword] = useState('');

    const resetForm = () => {
      setName('');
      setEmail('');
      setGenre('');
      setPhoneNumber('');
      setDomaine('');
      setPassword('');
    };
  

    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        const userData = {
          name,
            email,
            phoneNumber,
            genre,
            domaine,
     
            password,
        };

        try {
            const response = await axios.post('http://localhost:8080/api/candidate/addCandidate', userData);
            console.log(response.data);
            toast.success("demande d'inscription envoyer")
            resetForm();
            // Ajoutez éventuellement des alertes ou des redirections ici
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données', error);
            toast.error("Echec de demande")
        }
    };

    return (
        <div className="h-screen flex">
            <div className="h-screen w-1/3 p-20 mt-30 flex flex-col items-center">
                <div className="text-center flex flex-col items-center">
                    <h1 className="text-2xl text-gray-300 mb-10">Black Born Community</h1>
                    <img src={B} width="20%" height="200px" alt="Logo" />
                    <h1 className="text-2xl mb-10">S'enregister</h1>
                </div>
                <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Nom complet*
                    </label>
                    <input
                        type="name"
                        id="name"
                        placeholder="votre nom complet"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                    />
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Adresse mail*
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="exemple@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                    />
                    <label htmlFor="phone-number" className="block text-gray-700 text-sm font-bold mb-2">
                        Numero de telephone*
                    </label>
                    <input
                        type="text"
                        id="phone-number"
                        placeholder="Numero de telephone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                    />
                    <label htmlFor="genre" className="block text-gray-700 text-sm font-bold mb-2">
                        Genre*
                    </label>
                    <select
                        id="genre"
                        required
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                    >
                        <option value="male">Masculin</option>
                        <option value="female">Feminin</option>
                    </select>
                    <label htmlFor="domaine" className="block text-gray-700 text-sm font-bold mb-2">
                        Domaine*
                    </label>
                    <select
                        id="domain"
                        value={domaine}
                        required
                        onChange={(e) => setDomaine(e.target.value)}
                        className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                    >
                        <option value="Software Development">Software Development</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="AR and VR">AR and VR</option>
                        <option value="Design">Design</option>
                        <option value="Entreprenariat">Entreprenariat</option>
                    </select>
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Mot de pass*
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-3 mb-6 border border-gray-200 rounded-md"
                    />
                    <button
                        className="w-full bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        S'inscrire
                    </button>
                </form>
                <div className="flex flex-col justify-center items-center">
                    <span className='text-blue-500 hover:text-blue-700 font-bold pt-5 '>
                        <Link to="/signin">Se connecter</Link>
                    </span>
                </div>
            </div>
            <div
                className="bg-cover bg-center h-max md:h-screen w-2/3"
                style={{
                    backgroundImage: `url(${bglog})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
            </div>
            <Toaster/>
        </div>
    );
};

export default Register;