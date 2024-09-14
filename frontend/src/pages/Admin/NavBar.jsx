import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import B from "../../assets/B.png"
import { BsChatDots, BsChat } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color:#1A1D23; /* Dark blue background */
  color: white;
  display: flex;
  align-items: center;
  padding: 0 30px;
  z-index: 100; /* Ensure navbar stays above content */
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
  margin-left: auto; /* Push the icons to the right */
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
  const {currentUser}= useSelector(state=> state.users)
  return (
    <NavbarContainer>
      <NavbarLogo src={B} />
      <NavbarInput type="text" placeholder="Search" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
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
            <h2 className='text-bold text-white'>   {currentUser?.name}</h2>
          </NavbarProfileUsername>
        </NavbarProfile>
      </NavbarIconsContainer>
    </NavbarContainer>
  )
}

export default NavBar