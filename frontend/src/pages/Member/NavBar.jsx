import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsChatDots, BsChat } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaUser, FaBookOpen, FaRegQuestionCircle, FaDatabase, FaRegMinusSquare } from 'react-icons/fa';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../store/userSlice';
import Loading from '../../components/Loading';
import bbcc from "../../assets/icons/bbcc.png";
import Sidebar from './Sidebar';

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const { currentUser, loading, error } = useSelector(state => state.users);
  const popupRef = useRef(null); // Référence pour le popup

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError("Token manquant");
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get('http://localhost:8080/api/users/userDetail', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUser(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Vérifiez si le clic est à l'extérieur du popup
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (loading) {
    return <div>Chargement des détails de l'utilisateur...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      <section className="fixed top-0 left-0 w-full z-50 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center">
              <Link to='/user-dashboard' className='flex items-center text-white'>
                <img src={bbcc} className='h-[72px]' alt="Logo"/>
              </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <Link to='/user-dashboard' className='flex items-center text-gray-100 hover:text-gray-200'>
                <FaRegMinusSquare className="mr-2" /> Dashboard
              </Link>
              <Link to='/member-cours' className='flex items-center text-gray-100 hover:text-gray-200'>
                <FaBookOpen className="mr-2" /> Nos formations
              </Link>
              <Link to='/Chat' className='flex items-center text-gray-100 hover:text-gray-200'>
                <BsChat className="mr-2" /> Assistance AI
              </Link>
              <div className="relative" ref={popupRef}> {/* Ajout de ref ici */}
                <Link className="flex items-center cursor-pointer" onClick={togglePopup}>
                  {currentUser?.image ? (
                    <img className="rounded-lg w-8 h-8" src={currentUser.image} alt="User" />
                  ) : (
                    <FaUser className="rounded-full w-8 h-8" />
                  )}
                  <span className="ml-2 text-white">{currentUser?.name}</span>
                </Link>
                {showPopup && (
                  <ul className="absolute right-0 bg-gray-900 text-white shadow-lg mt-2 rounded-lg p-2">
                    <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                      <Link to="/member-profile" className="flex items-center">
                        <FaRegQuestionCircle className="mr-2" /> Paramètres
                      </Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                      <Link to="/logout" className="flex items-center">
                        <FaUser className="mr-2" /> Déconnexion
                      </Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                      <Link to="/help-center" className="flex items-center">
                        <BsChatDots className="mr-2" /> Centre d'aide
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="lg:hidden">
              <button onClick={toggleMenu} aria-label="Toggle Menu">
                <AiOutlineMenu className="text-white" size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
      {isOpen && (
        <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center p-4 mt-32">
            <h2 className="font-bold">Menu</h2>
            <button onClick={toggleMenu} aria-label="Close Menu">
              <AiOutlineClose className="text-white" size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-start p-4">
            <Link className="mb-2 flex items-center hover:text-gray-400" to="/blog-site">
              <FaBookOpen className="mr-2" /> Blog
            </Link>
            <Link className="mb-2 flex items-center hover:text-gray-400" to="/why">
              <FaRegQuestionCircle className="mr-2" /> Why BBC ?
            </Link>
            <Link className="mb-2 flex items-center hover:text-gray-400" to="/company">
              <FaUser className="mr-2" /> For company
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
