import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Assurez-vous d'avoir installé 'react-icons'
import bbcc from "../assets/icons/bbcc.png";

function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <>
      <div className="bg-gray-900">
        {isBannerVisible && (
          <div className="py-1 text-center bg-pink-500 relative">
            <div className="text-sm font-light text-white">
              <span>Profitez de la réduction pour la première cohorte jusqu'à 80%, Black Born Community </span>
              <Link to="/register" className="inline-flex items-center">
                <span className="mr-2 font-bold">BBC Academy Bootcamp</span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={13} viewBox="0 0 12 13" fill="none">
                    <path d="M6.51348 2.21443C6.4457 2.28417 6.39189 2.36715 6.35518 2.45857C6.31846 2.54999 6.29956 2.64804 6.29956 2.74708C6.29956 2.84612 6.31846 2.94418 6.35518 3.0356C6.39189 3.12702 6.4457 3.20999 6.51348 3.27973L8.89286 5.74793L1.66071 5.74793C1.46891 5.74793 1.28495 5.82697 1.14932 5.96766C1.0137 6.10835 0.9375 6.29917 0.9375 6.49814C0.9375 6.69711 1.0137 6.88793 1.14932 7.02862C1.28495 7.16931 1.46891 7.24835 1.66071 7.24835L8.89286 7.24835L6.51348 9.71654C6.4457 9.78629 6.39189 9.86926 6.35518 9.96068C6.31846 10.0521 6.29956 10.1502 6.29956 10.2492C6.29956 10.3482 6.31846 10.4463 6.35518 10.5377C6.39189 10.6291 6.4457 10.7121 6.51348 10.7818C6.64899 10.9216 6.83228 11 7.02335 11C7.21441 11 7.39771 10.9216 7.53321 10.7818L10.6358 7.55594C10.9074 7.27584 11.0609 6.89543 11.0625 6.49814C11.059 6.10345 10.9057 5.72609 10.6358 5.44784L7.53321 2.22193C7.39867 2.0812 7.2159 2.00142 7.02484 2.00002C6.83378 1.99861 6.64994 2.0757 6.51348 2.21443Z" fill="white" />
                  </svg>
                </span>
              </Link>
            </div>
            <button onClick={closeBanner} className="absolute top-1 right-1 text-white">
              <AiOutlineClose size={20} />
            </button>
          </div>
        )}
        <nav className="bbc-container relative px-12 py-5">
          <div className="flex items-center justify-between">
            <Link className="relative z-10 pr-4 lg:pr-0" to="/">
              <img className="h-12 border-0" src={bbcc} alt="Logo" />
            </Link>
            <ul className={`hidden xl:flex lg:justify-center gap-14 ${isOpen ? 'block' : 'hidden'}`}>
              <li>
                <Link className="text-lg text-white hover:text-gray-300 font-medium transition duration-200" to="/blog-site">Nos blogs</Link>
              </li>
              <li>
                <Link className="text-lg text-white hover:text-gray-300 font-medium transition duration-200" to="/company">Pour les entreprises</Link>
              </li>
              <li>
                <Link className="text-lg text-white hover:text-gray-300 font-medium transition duration-200" to="/why">Pourquoi nous ?</Link>
              </li>
              <li>
                <Link className="text-lg text-white hover:text-gray-300 font-medium transition duration-200" to="/formule">Nos formations &amp; prix</Link>
              </li>
            </ul>
            <div className="hidden xl:flex items-center gap-2">
              <a
                href="/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center text-center h-12 p-5 px-6 font-semibold text-white hover:text-black focus:text-black bg-transparent hover:bg-white focus:bg-white border border-gray-300 rounded-xl focus:ring-4 focus:ring-white focus:ring-opacity-50 transition duration-200"
              >
                Login
              </a>
              <a
                href="/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center text-center h-12 p-5 px-6 font-semibold text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-xl focus:ring-4 focus:ring-blue-200 transition duration-200"
              >
                S'inscrire
              </a>
            </div>
            <div className="xl:hidden">
              <button onClick={toggleMenu} className="flex items-center justify-center h-12 p-5 text-white border border-gray-300 rounded-full">
                {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
              </button>
            </div>
          </div>
        </nav>
        {isOpen && (
          <div className="xl:hidden absolute w-full z-40 bg-white">
            <div className="px-8 py-4">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link className="text-lg text-black hover:text-gray-700 font-medium transition duration-200" to="/blog-site">Nos blogs</Link>
                </li>
                <li>
                  <Link className="text-lg text-black hover:text-gray-700 font-medium transition duration-200" to="/company">Pour les entreprises</Link>
                </li>
                <li>
                  <Link className="text-lg text-black hover:text-gray-700 font-medium transition duration-200" to="/why">Pourquoi nous ?</Link>
                </li>
                <li>
                  <Link className="text-lg text-black hover:text-gray-700 font-medium transition duration-200" to="/formule">Nos formations &amp; prix</Link>
                </li>
                <li>
                  <a
                    href="/signin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-black hover:text-gray-700 font-medium transition duration-200"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-white bg-blue-500 hover:bg-blue-600 font-medium transition duration-200 py-2 px-4 rounded-xl"
                  >
                    S'inscrire
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
