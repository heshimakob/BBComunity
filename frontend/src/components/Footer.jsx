import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import instagram from "../assets/sociaux/instagram.svg";
import facebook from "../assets/sociaux/facebook.svg";
import twitter from "../assets/sociaux/twitter.svg";
import bbcc from "../assets/icons/bbcc.png"

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/subscribe', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to subscribe');
    }
  };

  return (
    <>
      <section className="pt-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <img className="mb-16 h-[80px]" src={bbcc} alt="Logo" />
          <div className="flex flex-wrap items-center -m-10 pb-20">
            <div className="w-full md:w-1/2 xl:w-1/3 p-10">
              <div className="h-full p-px bg-gradient-white overflow-hidden rounded-3xl">
                <div className="relative h-full">
                  <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-5 rounded-3xl" />
                  <div className="relative h-full py-12 px-10">
                    <h2 className="mb-4 font-heading text-3xl font-bold text-white">Abonnez-vous à notre newsletter</h2>
                    <p className="mb-10 text-lg text-gray-500 font-medium leading-relaxed">Recevez les dernières mises à jour, des conseils exclusifs et des offres spéciales directement dans votre boîte mail. Ne manquez pas l'occasion de rester informé et d'optimiser votre expérience sur notre plateforme. Inscrivez-vous dès maintenant et rejoignez notre communauté grandissante !</p>
                    <form onSubmit={handleSubscribe}>
                      <div className="relative p-1.5 bg-transparent border border-gray-500 focus-within:ring focus-within:ring-blue-200 rounded-2xl md:rounded-full transiiton duration-200">
                        <div className="relative">
                          <input
                            id="footers-input-01-1"
                            type="email"
                            className="py-3 px-6 sm:pr-14 w-full text-gray-500 placeholder-gray-500 font-semibold text-center md:text-left bg-transparent outline-none"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <button
                            type="submit"
                            className="md:absolute md:top-0 md:right-0 inline-flex justify-center items-center w-full md:w-12 h-12 md:h-full text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-2xl md:rounded-full transition duration-200"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                              <path d="M8.68464 2.28591C8.59426 2.3789 8.52253 2.48953 8.47357 2.61142C8.42461 2.73332 8.39941 2.86406 8.39941 2.99611C8.39941 3.12816 8.42461 3.2589 8.47357 3.38079C8.52253 3.50269 8.59426 3.61332 8.68464 3.70631L11.8571 6.99723L2.21429 6.99724C1.95854 6.99724 1.71327 7.10262 1.53243 7.29021C1.35159 7.4778 1.25 7.73223 1.25 7.99752C1.25 8.26281 1.35159 8.51723 1.53243 8.70482C1.71327 8.89241 1.95854 8.9978 2.21429 8.9978L11.8571 8.9978L8.68464 12.2887C8.59426 12.3817 8.52253 12.4923 8.47357 12.6142C8.42461 12.7361 8.39941 12.8669 8.39941 12.9989C8.39941 13.131 8.42461 13.2617 8.47357 13.3836C8.52253 13.5055 8.59426 13.6161 8.68464 13.7091C8.86531 13.8954 9.10971 14 9.36447 14C9.61922 14 9.86362 13.8954 10.0443 13.7091L14.1811 9.40791C14.5432 9.03446 14.7478 8.52724 14.75 7.99752C14.7453 7.47126 14.5409 6.96812 14.1811 6.59712L10.0443 2.29591C9.86489 2.10827 9.62121 2.0019 9.36645 2.00002C9.1117 1.99815 8.86659 2.10093 8.68464 2.28591Z" fill="currentColor" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      {message && <p className="mt-4 text-lg text-white font-medium">{message}</p>}
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 xl:flex-1 p-10">
              <h3 className="mb-8 font-heading text-2xl text-white font-bold">Notre site</h3>
              <ul>
                <li className="mb-6"><Link to="/blog" className="text-lg text-gray-500 hover:text-gray-600 font-medium transition duration-200">Blogs</Link></li>
                <li className="mb-6"><Link to="/company" className="text-lg text-gray-500 hover:text-gray-600 font-medium transition duration-200">Pour les entreprises</Link></li>
                <li className="mb-6"><Link to="/why" className="text-lg text-gray-500 hover:text-gray-600 font-medium transition duration-200">Pourquoi nous ?</Link></li>
                <li className="mb-6"><Link to="/formule" className="text-lg text-gray-500 hover:text-gray-600 font-medium transition duration-200">Nos formations & prix</Link></li>
               
              </ul>
            </div>
            <div className="w-full sm:w-1/2 xl:flex-1 p-10">
              <h3 className="mb-8 font-heading text-2xl text-white font-bold">Carriere et talent</h3>
              <ul>
                <li className="mb-6"><Link to="/signin" className="text-lg text-gray-500 hover:text-gray-600 font-medium transition duration-200">Job</Link></li>
                <li className="mb-6"><Link to="/signin" className="text-lg text-gray-500 hover:text-gray-600 font-medium transition duration-200">Talent and solutions</Link></li>
                <li className="mb-6"><a href="https://discord.gg/u4x2E62v" className="text-lg text-gray-500 hover:text-gray-600 font-medium transition duration-200">Notre Communaute</a></li>

              </ul>
            </div>
            <div className="w-full sm:w-1/2 xl:flex-1 p-10">
              <h3 className="mb-8 font-heading text-2xl text-white font-bold">Nos apprentissages</h3>
              <ul>
                <li className="mb-6"><Link to="/formule" className="text-lg text-gray-500 hover:text-gray-600 font-medium transition duration-200">Software Development</Link></li>
                <li className="mb-6"><Link to="/formule" className="text-lg text-gray-500 hover:text-gray-600 font-medium transition duration-200">Machine Learning</Link></li>
                <li className="mb-6"><Link to="/formule" className="text-lg text-gray-500 hover:text-gray-600 font-medium transition duration-200">Entreprenariat</Link></li>
                <li className="mb-6"><Link to="/formule" className="text-lg text-gray-500 hover:text-gray-600 font-medium transition duration-200">Art Numerique et Design</Link></li>
                <li><a href="#" className="text-lg text-gray-500 hover:text-gray-600 font-medium transition duration-200">Project Tracker</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white bg-opacity-5">
          <div className="container mx-auto px-4">
            <div className="py-6">
              <div className="flex flex-wrap justify-between -m-2">
                <div className="w-auto p-2">
                  <p className="text-gray-500 font-medium">© BBC Academy 2024. All rights reserved.</p>
                </div>
                <div className="w-auto p-2">
                  <ul className="flex flex-wrap gap-4">
                    <li><Link to="/term" className="text-gray-500 hover:text-gray-600 font-medium transition duration-200">Terme</Link></li>
                    <li><Link to="/privacy" className="text-gray-500 hover:text-gray-600 font-medium transition duration-200">Politique de confidentialité</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
