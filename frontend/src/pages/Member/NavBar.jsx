import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import B from "../../assets/B.png";
import { BsChatDots, BsChat } from 'react-icons/bs';
import axios from 'axios';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 30px;
  z-index: 100;
`;

const NavbarLogo = styled.img`
  width: 50px;
  height: auto;
  margin-right: 20px;
`;

const NavbarInput = styled.input`
  width: 800px;
  height: 30px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
`;

const NavbarIconsContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const NavbarNotification = styled.div`
  margin-right: 20px;
  font-size: 25px;
  cursor: pointer;
`;

const NavbarChat = styled.div`
  margin-right: 20px;
  font-size: 25px;
  cursor: pointer;
`;

const NavbarProfile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const NavbarProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const NavbarProfileUsername = styled.span`
  font-size: 16px;
`;

const NavBar = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // État de chargement

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('token');
      console.log(token)
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
        setLoading(false); // Fin du chargement
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) {
    return <div>Chargement des détails de l'utilisateur...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <NavbarContainer>
      <div className="w-auto">
                <Link
                  to='/'
                  className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
                >
                  <span className='px-2 py-1 bg-gradient-to-r to-emerald-600 from-sky-400 rounded-lg text-white'>
                    Black Born Community
                  </span>
                </Link>
              </div>
      {/* <NavbarInput type="text" placeholder="Search" style={{ marginLeft: 'auto', marginRight: 'auto' }} /> */}
      <NavbarIconsContainer>
        <NavbarNotification>
          <BsChatDots size={20} />
        </NavbarNotification>
        <NavbarChat>
          <BsChat size={20} />
        </NavbarChat>
        <NavbarProfile>
          <NavbarProfileImage src="https://via.placeholder.com/30" />
          <NavbarProfileUsername>
            <p className='text-white'>{user.name}</p>
          </NavbarProfileUsername>
        </NavbarProfile>
      </NavbarIconsContainer>
    </NavbarContainer>
  );
}

export default NavBar;