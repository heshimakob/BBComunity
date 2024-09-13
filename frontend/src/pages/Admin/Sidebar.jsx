import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import B from "../../assets/B.png"
import { BsGraphUp, BsPerson, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent, BsQuestionSquare, BsAlarm, BsChat, BsPersonFillCheck, BsMenuApp, BsDash, BsThreeDots, BsBarChart, BsBarChartLine, BsDistributeHorizontal, BsDot, BsSendDash, BsUpload } from 'react-icons/bs';


import { signoutSuccess } from '../../store/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const SidebarContainer = styled.div`
  position: fixed;
  top: 60px; /* Adjusted to account for navbar height */
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '150px' : '70px')};
  height: calc(100% - 60px); /* Adjusted to account for navbar height */
  background-color: #333; /* Dark blue background */
  color: white;
  overflow-y: auto; /* Enable vertical scrolling */
  padding-top: 20px;
  transition: width 0.3s ease; /* Smooth width transition */
  z-index: 100; /* Ensure sidebar stays above content */
`;


const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarNavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #3b3f45; /* Darker border */
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #3b3f45; /* Darker background on hover */
  }
`;

const SidebarIcon = styled.div`
  font-size: 20px;
  margin-bottom: 5px; /* Add some space between icon and label */
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 10px;
`;








const Sidebar=()=> {
 

  const handleLogout = async () => {
    try {
        // Effectuer la requête de déconnexion vers le serveur
        await axios.post('http://localhost:8080/api/users/logout');
        
        // Supprimez le token JWT du stockage du navigateur
        localStorage.removeItem('token'); // ou sessionStorage.removeItem('token');

        // Optionnel : Rediriger l'utilisateur vers la page de connexion, par exemple
        window.location.href = '/signin';
        alert("Vous êtes déconnecté.");
    } catch (error) {
        console.error("Erreur lors de la déconnexion:", error);
    }
};

  return ( 
    <SidebarContainer >
        {/* <SidebarHeader>
            <Logo src={B}/>
        </SidebarHeader> */}

<SidebarNav>
<SidebarNavItem>
  <SidebarIcon><BsGraphUp/></SidebarIcon>
  <StyledLink to="/admin-dashboard">Dashboard</StyledLink>
</SidebarNavItem>

        <SidebarNavItem>
            <SidebarIcon> <BsBook/></SidebarIcon>
            <StyledLink to="/admin-cours"> Courses</StyledLink>
        </SidebarNavItem>
     

        <SidebarNavItem>
            <SidebarIcon> <BsAlarm/></SidebarIcon>
            <StyledLink to="/admin/cohorte"> Cohorte</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
            <SidebarIcon> <BsAlarm/></SidebarIcon>
            <StyledLink to="/admin-annonce"> Annoncement</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
            <SidebarIcon> <BsChat/></SidebarIcon>
            <StyledLink to="/admin/discussion"> Discussion</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
            <SidebarIcon> <BsSendDash/></SidebarIcon>
            <StyledLink to="/admin-blog"> Blog</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
            <SidebarIcon> <BsCalendarEvent/></SidebarIcon>
            <StyledLink to="/admin/events"> Event</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
            <SidebarIcon> <BsCalendarEvent/></SidebarIcon>
            <StyledLink to="/admin/company"> Company</StyledLink>
        </SidebarNavItem>

        <SidebarNavItem>
            <SidebarIcon> <BsUpload/></SidebarIcon>
            <StyledLink to="/admin-users"> Users</StyledLink>
        </SidebarNavItem>


        <SidebarNavItem>
            <SidebarIcon> <BsUpload/></SidebarIcon>
            <StyledLink to="/admin/settings"> Settings Pofile</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
            <SidebarIcon> <BsGraphUp/></SidebarIcon>
            <StyledLink onClick={handleLogout}> Deconnexion</StyledLink>
        </SidebarNavItem>
        </SidebarNav>
    </SidebarContainer>
  )
}

export default Sidebar;