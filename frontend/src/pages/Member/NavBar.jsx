import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import Loading from '../../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../store/userSlice';
import B from "../../assets/B.png"
import Sidebar from './Sidebar';

function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const dispatch = useDispatch();
  const { currentUser, loading, error } = useSelector(state => state.users);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(getUserDetails(token));
    }
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
 
      <section className="overflow-hidden fixed top-0 left-0 w-full z-50">
        <div className="bg-gray-900">
          <div className="bbc-container px-4 mx-auto">
            <div className="flex items-center justify-between py-5">
              <div className="w-auto">
                <Link to='/user-dashboard' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                  {/* <span className='px-2 py-1 bg-gradient-to-r to-emerald-600 from-sky-400 rounded-lg text-white'>
                    Black Born Community
                  </span> */}
                  <img src={B} className='w-12 h-12'/>
                </Link>
              </div>
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center mr-8">
                  <li className="mr-14 font-medium text-gray-100 hover:text-gray-200 tracking-tight">
                    <Link to='/user-dashboard'>Dashboard</Link>
                  </li>
                  <li className="mr-14 font-medium text-gray-100 hover:text-gray-200 tracking-tight">
                    <Link to="/member-cours">Nos formations</Link>
                  </li>
                  <li className="mr-14 font-medium text-gray-100 hover:text-gray-200 tracking-tight">
                    <Link to='/Chat'>Assistance AI</Link>
                  </li>
                  <li className="mr-8 relative">
                 <Link to="/member-profile">
                 <div onClick={togglePopup} className="cursor-pointer flex items-center">
                      {currentUser?.image ? (
                        <img className="rounded-lg w-8 h-8" src={currentUser.image} alt="User" />
                      ) : (
                        <FaUser className="rounded-full w-8 h-8" />
                      )}
                      <span className="ml-2 text-white">{currentUser?.name}</span> {/* Affichage du nom */}
                    </div>
                 </Link>
                    {showPopup && (
                      <ul className="absolute right-0 bg-gray-950 text-white shadow-lg mt-2 rounded-lg p-2">
                        <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                          <Link to="/parameters">Paramètres</Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                          <Link to="/logout">Déconnexion</Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                          <Link to="/help-center">Centre d'aide</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </div>
              <div className="lg:hidden">
                <button onClick={toggleMenu} aria-label="Toggle Menu">
                  <AiOutlineMenu className="text-white" size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <div className={`fixed top-0 right-0 h-full w-64 bg-gray-950 text-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center p-4">
            <h2 className="font-bold">Menu</h2>
            <button onClick={toggleMenu} aria-label="Close Menu">
              <AiOutlineClose className="text-white" size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-start p-4">
            <Link className="mb-2 hover:text-gray-400" to="/blog-site">Blog</Link>
            <Link className="mb-2 hover:text-gray-400" to="/why">Why BBC ?</Link>
            <Link className="mb-2 hover:text-gray-400" to="/company">For company</Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default NavBar;
