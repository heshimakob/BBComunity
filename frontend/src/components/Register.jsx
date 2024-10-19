import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bglog from "../assets/bglog.jpeg";
import { Link } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import bbc from "../assets/icons/bbc.png";
import bbclog from "../assets/background/bbclog.png";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Register = ({ setProgress }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(''); // Pour numéro de téléphone
    const [genre, setGenre] = useState('male'); // Pour genre
    const [domaine, setDomaine] = useState('Software Development'); // Pour domaine
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Pour afficher/cacher le mot de passe

    const resetForm = () => {
        setName('');
        setEmail('');
        setGenre('male'); // Par défaut à 'male'
        setPhoneNumber('');
        setDomaine('Software Development'); // Par défaut à 'Software Development'
        setPassword('');
        setShowPassword(false); // Réinitialiser l'état d'affichage du mot de passe
    };

    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
            setProgress(100)
        }, 2000);
    }, [setProgress]);

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
            swal("Demande!", "Demande envoyée", "success");
            resetForm();
            window.location.href = '/signin';
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données', error);
            toast.error("Échec de la demande");
        }
    };

    return (
        <section className="h-screen relative pb-20">
            <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blue-900" style={{backgroundImage: `url(${bbclog})`}}>
            </div>
    
            <div className="container px-4 mx-auto">
                <div className="relative flex flex-wrap">
                    <div className="lg:flex lg:flex-col w-full lg:w-1/2 py-6 lg:pr-20">
                        <div className="flex justify-between items-center w-full mb-12 lg:mb-20">
                            <Link className="text-3xl font-semibold leading-none" to="/">
                                <img className="h-[90px] " src={bbc} alt="Black Born Community" width="auto" />
                            </Link>
                            <Link className="inline-block px-4 py-3 text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" to="/signin">Se connecter</Link>
                        </div>
                        <div className="w-full max-w-lg mx-auto lg:mx-0 my-auto">
                            <span className="text-sm text-blueGray-400">Créer votre compte</span>
                            <h4 className="mb-6 text-3xl">Enfin de rejoindre notre communauté</h4>
                            <form className="mt-14" onSubmit={handleSubmit}>
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                    Nom complet*
                                </label>
                                <div className="flex mb-4 px-4 bg-blueGray-50 rounded">
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Votre nom complet"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                                    />
                                </div>

                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                    Adresse mail*
                                </label>
                                <div className="flex mb-4 px-4 bg-blueGray-50 rounded">
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="exemple@gmail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                                    />
                                </div>

                                <label htmlFor="phone-number" className="block text-gray-700 text-sm font-bold mb-2">
                                    Numéro de téléphone*
                                </label>
                                <div className="flex mb-4 px-4 bg-blueGray-50 rounded">
                                    <PhoneInput
                                        country={'cd'} // Pays par défaut à RDC (République Démocratique du Congo)
                                        value={phoneNumber}
                                        onChange={setPhoneNumber}
                                     
                                        buttonClass="hidden" // Cache le drapeau pour qu'il ne soit pas visible deux fois
                                        dropdownClass="w-full"
                                          className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                                    />
                                </div>

                                <label htmlFor="genre" className="block text-gray-700 text-sm font-bold mb-2">
                                    Genre*
                                </label>
                                <div className="flex mb-4 px-4 bg-blueGray-50 rounded">
                                    <select
                                        id="genre"
                                        required
                                        value={genre}
                                        onChange={(e) => setGenre(e.target.value)}
                                        className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                                    >
                                        <option value="male">Masculin</option>
                                        <option value="female">Féminin</option>
                                    </select>
                                </div>

                                <label htmlFor="domaine" className="block text-gray-700 text-sm font-bold mb-2">
                                    Domaine*
                                </label>
                                <div className="flex mb-4 px-4 bg-blueGray-50 rounded">
                                    <select
                                        id="domaine"
                                        required
                                        value={domaine}
                                        onChange={(e) => setDomaine(e.target.value)}
                                        className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                                    >
                                        <option value="Software Development">Software Development</option>
                                        <option value="Network">Network</option>
                                        <option value="Machine Learning">Machine Learning</option>
                                        <option value="Entreprenariat">Entreprenariat</option>
                                        <option value="Art numerique et AR, VR et Design">Art numérique et AR, VR et Design</option>
                                    </select>
                                </div>

                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                    Mot de passe*
                                </label>
                                <div className="flex mb-4 px-4 bg-blueGray-50 rounded">
                                    <input
                                        type={showPassword ? 'text' : 'password'} // Change le type basé sur showPassword
                                        id="password"
                                        placeholder="************"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                                    />
                                    <button 
                                        type="button" 
                                        className="ml-4" 
                                        onClick={() => setShowPassword(prev => !prev)} // Inverse l'état de showPassword
                                    >
                                        {showPassword ? (
                                            <svg className="h-6 w-6 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A8.964 8.964 0 0012 19c-4.962 0-9-4.034-9-9s4.038-9 9-9c2.048 0 3.94.681 5.438 1.825m-2.563 3.556a4 4 0 00-6.747 2.172m3.688 4.2A4 4 0 0012 15c1.067 0 2.061-.417 2.828-1.172" />
                                            </svg>
                                        ) : (
                                            <svg className="h-6 w-6 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18m0 0l-2.45-2.45a11.963 11.963 0 003.44-8.55c0-6.627-5.373-12-12-12C5.373 0 0 5.373 0 12c0 2.048.51 3.96 1.438 5.6" />
                                            </svg>
                                        )}
                                    </button>
                                </div>

                                <button
                                    className="block w-full py-4 mb-4 text-center text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                                    type="submit"
                                >
                                    S'inscrire
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </section>
    );
};

export default Register;
