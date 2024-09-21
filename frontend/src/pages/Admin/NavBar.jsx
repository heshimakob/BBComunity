import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsChatDots, BsChat } from 'react-icons/bs';
import { getUserDetails } from '../../store/userSlice'; // Assurez-vous que le chemin est correct

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users); // Retrieve the user state from Redux

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      dispatch(getUserDetails(token)); // Récupérer les détails de l'utilisateur
    }
  }, [token, dispatch]);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gray-900 text-white flex items-center justify-between px-4">
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r to-emerald-600 from-sky-400 rounded-lg text-white">
          Black Born Community
        </span>
      </Link>
      <div className="flex items-center justify-end">
        <div className="mr-4">
          <BsChatDots size={20} />
        </div>
        <div className="mr-4">
          <BsChat size={20} />
        </div>
        {/* <div className="flex items-center mr-4">
          <img src="" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
          {user && user.userDetail ? (
            <p className="text-white">{user.userDetail.name}</p>
          ) : (
            <p className="text-white">Loading...</p>
          )}
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;