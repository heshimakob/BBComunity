import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess, signInFailure } from '../store/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import bglog from "../assets/bglog.jpeg";
import toast, { Toaster } from 'react-hot-toast';
import B from "../assets/B.png";
import swal from "sweetalert";
import {motion} from "framer-motion";
import bbc from "../assets/icons/bbc.jpg"
import walk from "../assets/background/walk.png"
import google from "../assets/icons/google.svg"
import facebook from "../assets/icons/fcebook.svg"

const Login = ({setProgress}) => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { error: errorMessage, user } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };

    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
            setProgress(100)
        }, 2000);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:8080/api/users/signin', { email, password });
            const { token, isAdmin } = response.data;
            dispatch(signInSuccess({ token, isAdmin }));
            localStorage.setItem('token', token);
            swal("Connecté!", "Connexion réussie!", "success");
            window.location.href = isAdmin ? '/admin-dashboard' : '/user-dashboard';
        } catch (error) {
            swal("Erreur!", "Echec de connexion!", "error");
            resetForm();
            window.location.href = '/signin';
            console.error(error);
        }
    };

    return (
        <section className="h-screen relative pb-20">
            <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blue-600" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=450&q=80&blend=1e293b&sat=30&blend-mode=multiply")'}}>
                {/* <div className="flex items-center h-screen">
                    <img className="lg:max-w-lg mx-auto" src={walk} alt="Illustration" />
                </div> */}
            </div>

            <div className="container px-4 mx-auto">
                <div className="relative flex flex-wrap">
                    <div className="lg:flex lg:flex-col w-full lg:w-1/2 py-6 lg:pr-20" >
                        <div className="flex justify-between items-center w-full mb-12 lg:mb-20" >
                            <Link className="text-3xl font-semibold leading-none" to="/">
                                <img className="h-12 " src={bbc}alt="Black Born Community" width="auto" />
                            </Link>
                            <Link className="inline-block px-4 py-3 text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" to="/register">S'inscrire</Link>
                        </div>





                        
                        <div className="w-full max-w-lg mx-auto lg:mx-0 my-auto">
                            <span className="text-sm text-blueGray-400">Se connecter</span>
                            <h4 className="mb-6 text-3xl">Rejoindre notre communaute</h4>
                            <form className="mt-14" onSubmit={handleSubmit}>
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                    Adresse mail*
                                </label>
                                <div className="flex mb-4 px-4 bg-blueGray-50 rounded">
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="name@company.com"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                                    />
                                    <svg className="h-6 w-6 ml-4 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                    Mot de passe*
                                </label>
                                <div className="flex mb-6 px-4 bg-blueGray-50 rounded">
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Mot de passe"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                                    />
                                    <button className="ml-4">
                                        <svg className="h-6 w-6 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                </div>
                                <button
                                    className="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? 'Loading...' : 'Se connecter'}
                                </button>
                            </form>
                            <p className="my-6 text-xs text-blueGray-400 text-center">or continue with</p>
                            <button className="flex items-center w-full px-4 py-3 mb-2 text-xs text-blueGray-500 font-semibold leading-none border hover:bg-blueGray-50 rounded" href="#">
                                <img className="h-6 pr-10" src={facebook} alt="Facebook Logo" />
                                <span>Sign In with Facebook</span>
                            </button>
                            <button className="flex items-center px-4 py-3 w-full text-xs text-blueGray-500 font-semibold leading-none border hover:bg-blueGray-50 rounded" href="#">
                                <img className="h-6 pr-10" src={google} alt="Google Logo" />
                                <span>Sign In with Google</span>
                            </button>
                            <div className="flex flex-col text-center gap-2 text-sm mt-5">
                                <span>Vous n'avez pas de compte?</span>
                                <Link to='/register' className='text-blue-500'>
                                    Creer un compte
                                </Link>
                            </div>
                            {errorMessage && (
                                <span className='mt-5 text-red-500'>{errorMessage}</span>
                            )}
                        </div>
                        <div>
                            <p className="mt-8 text-xs text-blueGray-400 text-center lg:text-left"><a className="underline hover:text-blueGray-500" href="#">Privacy Policy</a> and <a className="underline hover:text-blueGray-500" href="#">Terms of Use</a></p>
                        </div>
                    </div>
                </div>





            </div>
            <Toaster />
        </section>
    );
};

export default Login;
