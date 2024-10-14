import B from "../assets/B.png";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bglog from "../assets/bglog.jpeg";
import { Link } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import bbc from "../assets/icons/bbc.jpg";

const Register = ({ setProgress }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(''); // Pour numéro de téléphone
    const [genre, setGenre] = useState('male'); // Pour genre
    const [domaine, setDomaine] = useState('Software Development'); // Pour domaine
    const [password, setPassword] = useState('');

    const resetForm = () => {
        setName('');
        setEmail('');
        setGenre('male'); // Par défaut à 'male'
        setPhoneNumber('');
        setDomaine('Software Development'); // Par défaut à 'Software Development'
        setPassword('');
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
            <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blue-900" style={{ backgroundImage: 'url("https://media.istockphoto.com/id/1921150261/photo/male-and-female-student-icons-on-wooden-blocks-education-concept-for-success.webp?a=1&b=1&s=612x612&w=0&k=20&c=6GB5plW0sNYmie_fivH_F6fncMrDbMKdFnKs4NTVQAg=)' }}>
                {/* <div className="flex items-center h-screen">
                    <img className="lg:max-w-lg mx-auto" src={walk} alt="Illustration" />
                </div> */}
            </div>
    
            <div className="container px-4 mx-auto">
                <div className="relative flex flex-wrap">
                    <div className="lg:flex lg:flex-col w-full lg:w-1/2 py-6 lg:pr-20">
                        <div className="flex justify-between items-center w-full mb-12 lg:mb-20">
                            <Link className="text-3xl font-semibold leading-none" to="/">
                                <img className="h-12 " src={bbc} alt="Black Born Community" width="auto" />
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
                                        type="name"
                                        id="name"
                                        placeholder="Votre nom complet"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                                    />
                                    <svg className="h-6 w-6 ml-4 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
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
                                    <svg className="h-6 w-6 ml-4 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>

                                <label htmlFor="phone-number" className="block text-gray-700 text-sm font-bold mb-2">
                                    Numéro de téléphone*
                                </label>
                                <div className="flex mb-4 px-4 bg-blueGray-50 rounded">
                                    <input
                                        type="text"
                                        id="phone-number"
                                        placeholder="+243 999 412 974"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                        className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                                    />
                                    <svg className="h-6 w-6 ml-4 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
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
                                    Domain*
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
                                    </select>
                                </div>

                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                    Mot de passe*
                                </label>
                                <div className="flex mb-4 px-4 bg-blueGray-50 rounded">
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="************"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                                    />
                                    <button type="button" className="ml-4" onClick={() => setPassword((prev) => prev ? '' : password)}>
                                        <svg className="h-6 w-6 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
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
